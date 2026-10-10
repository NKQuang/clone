import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, PageTitle, ProductCard, Icon, I } from '../components/ui.jsx'
import { collections } from '../store.jsx'

const PRICES = [['Dưới 1 triệu', 0, 1e6], ['1 - 2 triệu', 1e6, 2e6], ['2 - 3 triệu', 2e6, 3e6], ['3 - 5 triệu', 3e6, 5e6], ['Trên 5 triệu', 5e6, Infinity]]
const SORTS = [['default', 'Mặc định'], ['az', 'Tên A-Z'], ['za', 'Tên Z-A'], ['asc', 'Giá tăng dần'], ['desc', 'Giá giảm dần']]
const PER = 12

export default function Collection({ title, desc, items, crumbs, showCats }) {
  const [brands, setBrands] = useState([])
  const [prices, setPrices] = useState([])
  const [sort, setSort] = useState('default')
  const [page, setPage] = useState(1)
  const allBrands = useMemo(() => [...new Set(items.map((p) => p.vendor).filter(Boolean))].sort(), [items])
  const toggle = (set, v) => { set((cur) => (cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v])); setPage(1) }

  const list = useMemo(() => {
    let r = items.filter((p) => (!brands.length || brands.includes(p.vendor)) && (!prices.length || prices.some((i) => p.price >= PRICES[i][1] && p.price < PRICES[i][2])))
    const by = { az: (a, b) => a.name.localeCompare(b.name, 'vi'), za: (a, b) => b.name.localeCompare(a.name, 'vi'), asc: (a, b) => a.price - b.price, desc: (a, b) => b.price - a.price }[sort]
    return by ? [...r].sort(by) : r
  }, [items, brands, prices, sort])
  const pages = Math.max(1, Math.ceil(list.length / PER))
  const shown = list.slice((page - 1) * PER, page * PER)

  return (
    <>
      <Breadcrumb items={crumbs || [[title]]} />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <PageTitle sub={desc}>{title}</PageTitle>
        {showCats && (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            {collections.filter((c) => c.main).map((c) => <Link key={c.handle} to={'/' + c.handle} className="chip">{c.name} ({c.products.length})</Link>)}
          </div>
        )}
        <div className="stack-sm" style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 32, alignItems: 'start' }}>
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 24, border: '1px solid var(--border)', borderRadius: 12, padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: 17, color: 'var(--main)' }}>Bộ lọc</strong>
              {(brands.length > 0 || prices.length > 0) && <button onClick={() => { setBrands([]); setPrices([]) }} style={{ background: 'none', color: 'var(--price)', fontSize: 13 }}>Bỏ hết</button>}
            </div>
            {allBrands.length > 0 && (
              <fieldset style={{ border: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <legend style={{ fontWeight: 600, marginBottom: 10 }}>Thương hiệu</legend>
                {allBrands.map((b) => <label key={b} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 14, cursor: 'pointer' }}><input type="checkbox" checked={brands.includes(b)} onChange={() => toggle(setBrands, b)} />{b}</label>)}
              </fieldset>
            )}
            <fieldset style={{ border: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <legend style={{ fontWeight: 600, marginBottom: 10 }}>Khoảng giá</legend>
              {PRICES.map(([l], i) => <label key={l} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 14, cursor: 'pointer' }}><input type="checkbox" checked={prices.includes(i)} onChange={() => toggle(setPrices, i)} />{l}</label>)}
            </fieldset>
          </aside>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <span style={{ color: '#555', fontSize: 14 }}>Hiển thị {shown.length} / {list.length} sản phẩm</span>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>Sắp xếp:
                <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', font: 'inherit' }}>
                  {SORTS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </label>
            </div>
            {shown.length ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 16 }}>{shown.map((p) => <ProductCard key={p.handle} p={p} />)}</div>
            ) : (
              <div style={{ textAlign: 'center', padding: '64px 16px', border: '1px dashed var(--border)', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                <Icon d={I.search} size={40} color="#9ca3af" />
                <p style={{ color: '#555' }}>{items.length ? 'Không có sản phẩm phù hợp với bộ lọc.' : 'Danh mục này hiện chưa có sản phẩm.'}</p>
                <Link to="/collections/all" style={{ color: '#16a34a', fontWeight: 500 }}>Xem tất cả sản phẩm</Link>
              </div>
            )}
            {pages > 1 && (
              <nav aria-label="Phân trang" style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
                {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                  <button key={n} onClick={() => { setPage(n); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className={`chip${n === page ? ' on' : ''}`} style={{ minWidth: 40 }}>{n}</button>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
