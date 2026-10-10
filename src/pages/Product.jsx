import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Breadcrumb, Btn, Icon, I, ProductCard } from '../components/ui.jsx'
import { useCart, vnd, discount, thumb, products, collections } from '../store.jsx'

const C = 'https://bizweb.dktcdn.net/100/697/772/files'
const PERKS = [['truck.svg', 'Miễn phí vận chuyển', 'Giao hàng tận nơi toàn quốc'], ['shield.svg', 'Cam kết chính hãng', 'Bảo hành uy tín theo quy định'], ['return.svg', 'Đổi trả dễ dàng', 'Trong vòng 30 ngày nếu có lỗi'], ['customer-support-7.svg', 'Hỗ trợ 24/7', 'Sẵn sàng giải đáp mọi thắc mắc']]
const PROMOS = ['Tặng phiếu mua hàng 500.000đ áp dụng cho đơn hàng tiếp theo.', 'Giảm thêm 5% khi thanh toán qua VNPAY', 'Miễn phí vận chuyển cho đơn từ 300.000đ', 'Đổi trả dễ dàng trong 30 ngày nếu có lỗi kỹ thuật.']

export default function Product({ p }) {
  const [img, setImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [v, setV] = useState(0)
  const [tab, setTab] = useState('desc')
  const { add, wish, toggleWish } = useCart()
  const nav = useNavigate()
  const variant = p.variants[v]
  const price = variant?.price ?? p.price
  const old = variant?.old ?? p.old
  const off = discount({ price, old })
  const col = collections.find((c) => c.main && c.products.includes(p.handle))
  const related = products.filter((x) => x.handle !== p.handle && (x.type === p.type || x.vendor === p.vendor)).slice(0, 5)
  const liked = wish.includes(p.handle)

  return (
    <>
      <Breadcrumb items={[...(col ? [[col.name, '/' + col.handle]] : [['Sản phẩm', '/collections/all']]), [p.name]]} />
      <div className="container" style={{ padding: '32px 16px' }}>
        <div className="stack-sm" style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 40, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ position: 'relative', border: '1px solid var(--border)', borderRadius: 16, aspectRatio: '1', padding: 16 }}>
              {off > 0 && <span style={{ position: 'absolute', top: 16, left: 16, background: 'var(--price)', color: '#fff', fontWeight: 600, padding: '4px 10px', borderRadius: 6 }}>-{off}%</span>}
              <img src={thumb(p.images[img], '1024x1024')} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            {p.images.length > 1 && (
              <div style={{ display: 'flex', gap: 8, overflowX: 'auto' }}>
                {p.images.map((u, i) => (
                  <button key={u} onClick={() => setImg(i)} aria-label={`Ảnh ${i + 1}`} style={{ flex: '0 0 80px', height: 80, padding: 4, background: '#fff', border: `2px solid ${i === img ? 'var(--main)' : 'var(--border)'}`, borderRadius: 10 }}>
                    <img src={thumb(u, 'medium')} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h1 style={{ fontSize: 'clamp(22px, 2.4vw, 30px)', lineHeight: 1.35, color: 'var(--main)' }}>{p.name}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px', fontSize: 14, color: '#555' }}>
              {p.vendor && <span>Thương hiệu: <strong style={{ color: 'var(--main)' }}>{p.vendor}</strong></span>}
              {p.sku && <span>SKU: <strong>{p.sku}</strong></span>}
              <span>Tình trạng: <strong style={{ color: p.available ? '#16a34a' : 'var(--price)' }}>{p.available ? 'Còn hàng' : 'Hết hàng'}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, background: '#f9fafb', padding: '16px 20px', borderRadius: 12 }}>
              <strong style={{ fontSize: 30, color: 'var(--price)' }}>{vnd(price)}</strong>
              {off > 0 && <><del style={{ color: '#999' }}>{vnd(old)}</del><span style={{ background: '#fee2e2', color: 'var(--price)', fontSize: 13, fontWeight: 600, padding: '2px 8px', borderRadius: 6 }}>-{off}%</span></>}
            </div>

            {p.variants.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <strong style={{ fontSize: 14 }}>{p.options.join(' / ') || 'Phiên bản'}:</strong>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.variants.map((x, i) => <button key={x.title} onClick={() => setV(i)} disabled={x.available === false} className={`chip${i === v ? ' on' : ''}`} style={{ opacity: x.available === false ? 0.5 : 1 }}>{x.title}</button>)}
                </div>
              </div>
            )}

            <div style={{ border: '1px dashed #16a34a', background: '#f0fdf4', borderRadius: 12, padding: 16 }}>
              <strong style={{ color: 'var(--main)', display: 'block', marginBottom: 8 }}>🎁 Khuyến mãi hôm nay</strong>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, listStyle: 'none' }}>{PROMOS.map((x) => <li key={x} style={{ display: 'flex', gap: 8 }}><Icon d={I.check} size={16} color="#16a34a" />{x}</li>)}</ul>
            </div>

            {p.price > 0 ? (
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ display: 'flex', border: '1px solid var(--border)', borderRadius: 8 }} aria-label="Số lượng">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 40, background: 'none', fontSize: 18 }} aria-label="Giảm">−</button>
                  <input value={qty} onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))} style={{ width: 48, textAlign: 'center', border: 0, font: 'inherit' }} aria-label="Số lượng" />
                  <button onClick={() => setQty(qty + 1)} style={{ width: 40, background: 'none', fontSize: 18 }} aria-label="Tăng">+</button>
                </div>
                <Btn disabled={!p.available} onClick={() => add(p.handle, qty)} style={{ flex: 1, background: '#fff', color: 'var(--main)', border: '2px solid var(--main)' }}><Icon d={I.cart} size={18} />Thêm vào giỏ hàng</Btn>
                <Btn disabled={!p.available} onClick={() => { add(p.handle, qty); nav('/cart') }} style={{ flex: 1 }}>Mua ngay</Btn>
                <button onClick={() => toggleWish(p.handle)} aria-label="Yêu thích" style={{ width: 48, height: 48, border: '1px solid var(--border)', borderRadius: 8, background: '#fff', display: 'grid', placeItems: 'center', color: liked ? 'var(--price)' : 'inherit' }}><Icon d={I.heart} fill={liked ? 'currentColor' : 'none'} /></button>
              </div>
            ) : (
              <a href="tel:19006750"><Btn style={{ width: '100%' }}><Icon d={I.phone} size={18} />Liên hệ 1900 6750 để nhận báo giá</Btn></a>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              {PERKS.map(([ic, t, d]) => (
                <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'center', border: '1px solid var(--border)', borderRadius: 10, padding: 12 }}>
                  <img src={`${C}/${ic}`} alt="" style={{ width: 32, height: 32 }} />
                  <div><strong style={{ fontSize: 14 }}>{t}</strong><p style={{ fontSize: 12, color: '#666' }}>{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 48, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
          <div role="tablist" style={{ display: 'flex', borderBottom: '1px solid var(--border)', background: '#f9fafb' }}>
            {[['desc', 'Mô tả sản phẩm'], ['policy', 'Chính sách đổi trả'], ['review', 'Đánh giá (0)']].map(([k, l]) => (
              <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} style={{ padding: '16px 24px', background: tab === k ? '#fff' : 'transparent', borderBottom: tab === k ? '3px solid var(--main)' : '3px solid transparent', fontWeight: 600, color: tab === k ? 'var(--main)' : '#555' }}>{l}</button>
            ))}
          </div>
          <div style={{ padding: 24 }}>
            {tab === 'desc' && (p.content ? <div className="prose" dangerouslySetInnerHTML={{ __html: p.content.replace(/src="\/\//g, 'src="https://') }} /> : <p>Đang cập nhật nội dung.</p>)}
            {tab === 'policy' && <p className="prose">Sản phẩm được đổi trả miễn phí trong vòng 30 ngày nếu có lỗi kỹ thuật từ nhà sản xuất. Xem chi tiết tại <Link to="/chinh-sach-doi-tra">Chính sách đổi trả</Link>.</p>}
            {tab === 'review' && <p style={{ color: '#555' }}>Chưa có đánh giá nào cho sản phẩm này.</p>}
          </div>
        </div>

        {related.length > 0 && (
          <section style={{ marginTop: 48 }}>
            <h2 style={{ fontSize: 26, color: 'var(--main)', marginBottom: 20 }}>Sản phẩm liên quan</h2>
            <div className="grid-products">{related.map((x) => <ProductCard key={x.handle} p={x} />)}</div>
          </section>
        )}
      </div>
    </>
  )
}
