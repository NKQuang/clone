import { Link, useNavigate } from 'react-router-dom'
import { useCart, thumb, vnd, discount } from '../store.jsx'

export const I = {
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm10 2-4.35-4.35',
  phone: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  cart: 'M6 6h15l-1.5 9h-12zM6 6 5 3H2m7 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  down: 'm6 9 6 6 6-6',
  right: 'm9 6 6 6-6 6',
  bolt: 'M13 2 3 14h9l-1 8 10-12h-9z',
  star: 'm12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z',
  mail: 'M4 4h16v16H4zm0 0 8 8 8-8',
  pin: 'M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-15v5l3 3',
  trash: 'M3 6h18M8 6V4h8v2m-9 0 1 14h8l1-14',
  check: 'M20 6 9 17l-5-5',
  menu: 'M3 6h18M3 12h18M3 18h18',
  x: 'M18 6 6 18M6 6l12 12',
}

export const Icon = ({ d, size = 20, color = 'currentColor', fill = 'none' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
)

export function ProductCard({ p }) {
  const { add, wish, toggleWish } = useCart()
  const nav = useNavigate()
  const off = discount(p)
  const hasOpts = p.variants?.length > 0
  const liked = wish.includes(p.handle)
  const action = () => {
    if (!p.available) return
    if (hasOpts || !p.price) nav('/' + p.handle)
    else add(p.handle)
  }
  return (
    <div className="card" style={{ position: 'relative', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'box-shadow .2s' }}>
      {off > 0 && <span style={{ position: 'absolute', top: 10, left: 10, zIndex: 1, background: 'var(--price)', color: '#fff', fontSize: 12, fontWeight: 600, padding: '3px 8px', borderRadius: 6 }}>-{off}%</span>}
      <Link to={'/' + p.handle} className="card-img" style={{ aspectRatio: '1', padding: 12 }}><img src={thumb(p.images[0])} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></Link>
      <div style={{ padding: '0 12px 12px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <h3 className="clamp2" style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.45, minHeight: 40 }}><Link to={'/' + p.handle}>{p.name}</Link></h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#777' }}><Icon d={I.star} size={14} color="#f59e0b" />0.0 <span>(0 đánh giá)</span></div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
          <strong style={{ color: 'var(--price)', fontSize: 16 }}>{vnd(p.price)}</strong>
          {off > 0 && <del style={{ color: '#999', fontSize: 13 }}>{vnd(p.old)}</del>}
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
          <button onClick={action} className="btn-main" disabled={!p.available} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: p.available ? 'var(--main)' : '#9ca3af', color: '#fff', padding: '9px 0', borderRadius: 8, fontSize: 14 }}>
            <Icon d={I.cart} size={16} />{!p.available ? 'Hết hàng' : !p.price ? 'Chi tiết' : hasOpts ? 'Tuỳ chọn' : 'Mua hàng'}
          </button>
          <button aria-label="Yêu thích" onClick={() => toggleWish(p.handle)} style={{ width: 38, display: 'grid', placeItems: 'center', border: '1px solid #e5e7eb', background: '#fff', borderRadius: 8, color: liked ? 'var(--price)' : 'inherit' }}><Icon d={I.heart} size={16} fill={liked ? 'currentColor' : 'none'} /></button>
        </div>
      </div>
    </div>
  )
}

export function SectionHead({ tag, t1, t2, desc, link, to = '/collections/all', light }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {tag && <span style={{ color: light ? 'var(--second)' : '#16a34a', fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>{tag}</span>}
        <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.25, color: light ? '#fff' : 'var(--main)' }}>{t1}{t2 && <><br /><span style={{ color: light ? '#facc15' : '#16a34a' }}>{t2}</span></>}</h2>
        {desc && <p style={{ color: light ? '#e5e7eb' : '#555', maxWidth: 560, lineHeight: 1.6 }}>{desc}</p>}
      </div>
      {link && <Link to={to} style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500, color: light ? '#fff' : 'var(--main)', borderBottom: '1px solid currentColor', paddingBottom: 2 }}>{link} <Icon d={I.arrow} size={16} /></Link>}
    </div>
  )
}

export function Breadcrumb({ items }) {
  return (
    <div style={{ background: 'var(--header-bg)', padding: '14px 0' }}>
      <ol className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6, listStyle: 'none', fontSize: 14, color: '#555' }}>
        <li><Link to="/" className="nav-link">Trang chủ</Link></li>
        {items.map(([label, to], i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Icon d={I.right} size={14} />
            {to ? <Link to={to} className="nav-link">{label}</Link> : <span style={{ color: 'var(--main)', fontWeight: 500 }}>{label}</span>}
          </li>
        ))}
      </ol>
    </div>
  )
}

export const PageTitle = ({ children, sub }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
    <h1 style={{ fontSize: 'clamp(26px, 3vw, 36px)', color: 'var(--main)' }}>{children}</h1>
    {sub && <p style={{ color: '#555', lineHeight: 1.6, maxWidth: 760 }}>{sub}</p>}
  </div>
)

export const Btn = ({ children, style, ...rest }) => (
  <button className="btn-main" {...rest} style={{ background: 'var(--main)', color: '#fff', padding: '12px 24px', borderRadius: 8, fontWeight: 500, fontSize: 15, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, ...style }}>{children}</button>
)

export const Field = ({ label, ...rest }) => (
  <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, fontWeight: 500 }}>
    {label}
    {rest.as === 'textarea'
      ? <textarea {...rest} as={undefined} style={{ border: '1px solid var(--border)', borderRadius: 8, padding: 12, font: 'inherit', fontWeight: 400, minHeight: 120, resize: 'vertical' }} />
      : <input {...rest} style={{ border: '1px solid var(--border)', borderRadius: 8, padding: '12px', font: 'inherit', fontWeight: 400 }} />}
  </label>
)
