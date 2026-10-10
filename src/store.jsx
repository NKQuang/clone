import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import products from './data/products.json'
import articles from './data/articles.json'
import pages from './data/pages.json'
import collections from './data/collections.json'

export { products, articles, pages, collections }

export const productMap = Object.fromEntries(products.map((p) => [p.handle, p]))
export const articleMap = Object.fromEntries(articles.map((a) => [a.handle, a]))
export const collectionMap = Object.fromEntries(collections.map((c) => [c.handle, c]))

export const getCollectionProducts = (handle) => {
  if (handle === 'all') return products
  const c = collectionMap[handle]
  return c ? c.products.map((h) => productMap[h]).filter(Boolean) : []
}

export const thumb = (url, size = 'large') => (url || '').replace('bizweb.dktcdn.net/100/', `bizweb.dktcdn.net/thumb/${size}/100/`)
export const vnd = (n) => (n ? Number(n).toLocaleString('vi-VN') + '₫' : 'Liên hệ')
export const discount = (p) => (p.old && p.old > p.price && p.price > 0 ? Math.round((1 - p.price / p.old) * 100) : 0)

const CartCtx = createContext(null)
export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('wf-cart')) || [] } catch { return [] }
  })
  const [wish, setWish] = useState(() => {
    try { return JSON.parse(localStorage.getItem('wf-wish')) || [] } catch { return [] }
  })
  const [toast, setToast] = useState(null)
  useEffect(() => localStorage.setItem('wf-cart', JSON.stringify(items)), [items])
  useEffect(() => localStorage.setItem('wf-wish', JSON.stringify(wish)), [wish])
  useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(null), 2500); return () => clearTimeout(t) }, [toast])

  const api = useMemo(() => ({
    items, wish, toast,
    count: items.reduce((s, i) => s + i.qty, 0),
    total: items.reduce((s, i) => s + i.qty * (productMap[i.handle]?.price || 0), 0),
    add: (handle, qty = 1) => {
      setItems((cur) => {
        const f = cur.find((i) => i.handle === handle)
        return f ? cur.map((i) => (i.handle === handle ? { ...i, qty: i.qty + qty } : i)) : [...cur, { handle, qty }]
      })
      setToast(`Đã thêm "${productMap[handle]?.name}" vào giỏ hàng`)
    },
    setQty: (handle, qty) => setItems((cur) => (qty <= 0 ? cur.filter((i) => i.handle !== handle) : cur.map((i) => (i.handle === handle ? { ...i, qty } : i)))),
    remove: (handle) => setItems((cur) => cur.filter((i) => i.handle !== handle)),
    clear: () => setItems([]),
    toggleWish: (handle) => setWish((cur) => (cur.includes(handle) ? cur.filter((h) => h !== handle) : [...cur, handle])),
  }), [items, wish, toast])
  return <CartCtx.Provider value={api}>{children}</CartCtx.Provider>
}
export const useCart = () => useContext(CartCtx)
