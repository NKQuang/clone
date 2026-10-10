import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Icon, I } from './ui.jsx'
import { useCart, collections } from '../store.jsx'

const CDN = 'https://bizweb.dktcdn.net/100/697/772'
export const LOGO = `${CDN}/themes/1151009/assets/logo.png`

export const NAV = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Giới thiệu', to: '/gioi-thieu', children: [['Về Wolf Fan', '/gioi-thieu'], ['Đối tác', '/doi-tac'], ['Bán hàng doanh nghiệp', '/ban-hang-doanh-nghiep']] },
  { label: 'Sản phẩm', to: '/collections/all', children: [['Tất cả sản phẩm', '/collections/all'], ...collections.filter((c) => c.main).map((c) => [c.name, '/' + c.handle])] },
  { label: 'Bộ sưu tập', to: '/bo-suu-tap', children: [['Tất cả bộ sưu tập', '/bo-suu-tap'], ['Quạt cây', '/quat-cay'], ['Quạt trần', '/quat-tran'], ['Quạt treo tường', '/quat-treo-tuong'], ['Quạt tích điện', '/quat-tich-dien']] },
  { label: 'Khuyến mãi', to: '/san-pham-khuyen-mai' },
  { label: 'Tin tức', to: '/tin-tuc' },
  { label: 'Liên hệ', to: '/lien-he' },
  { label: 'Hệ thống cửa hàng', to: '/he-thong-cua-hang' },
  { label: 'Chính sách cửa hàng', to: '/chinh-sach', children: [['Chính sách bảo mật', '/chinh-sach-bao-mat'], ['Chính sách đổi trả', '/chinh-sach-doi-tra'], ['Chính sách thanh toán', '/chinh-sach-thanh-toan'], ['Chính sách vận chuyển', '/chinh-sach-van-chuyen'], ['Điều khoản dịch vụ', '/dieu-khoan-dich-vu'], ['Câu hỏi thường gặp', '/cau-hoi-thuong-gap']] },
  { label: 'Tuyển dụng', to: '/tuyen-dung' },
]

function Header() {
  const { count } = useCart()
  const nav = useNavigate()
  const loc = useLocation()
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [loc.pathname])
  const submit = (e) => { e.preventDefault(); nav('/search?q=' + encodeURIComponent(q.trim())) }
  return (
    <header style={{ background: '#fff', position: 'relative', zIndex: 20 }}>
      {loc.pathname === '/' && <Link to="/san-pham-khuyen-mai"><img src={`${CDN}/files/banner-top.jpg`} alt="Ưu đãi hè" style={{ width: '100%', height: 'auto' }} /></Link>}
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '16px', flexWrap: 'wrap' }}>
        <button className="show-sm" aria-label="Mở menu" onClick={() => setOpen(true)} style={{ background: 'none', display: 'none' }}><Icon d={I.menu} size={26} /></button>
        <Link to="/"><img src={LOGO} alt="Wolf Fan" style={{ height: 64, width: 'auto' }} /></Link>
        <form onSubmit={submit} className="search-form" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, border: '2px solid var(--border)', borderRadius: 8, padding: '4px 4px 4px 16px', maxWidth: 640, minWidth: 240 }}>
          <Icon d={I.search} color="#888" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Bạn cần tìm sản phẩm gì?" aria-label="Tìm kiếm" style={{ flex: 1, minWidth: 0, border: 0, outline: 0, font: 'inherit', fontSize: 14, padding: 8 }} />
          <button className="btn-main" style={{ background: 'var(--main)', color: '#fff', padding: '10px 24px', borderRadius: 6, fontWeight: 500 }}>Tìm kiếm</button>
        </form>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginLeft: 'auto' }}>
          <div className="hide-md" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon d={I.phone} size={26} />
            <div><a href="tel:19006750" style={{ fontWeight: 600, fontSize: 18, color: 'var(--main)' }}>1900 6750</a><div style={{ fontSize: 13, color: '#555' }}>Hỗ trợ 24/7</div></div>
          </div>
          <Link to="/account/login" className="hide-sm" style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500 }}><Icon d={I.user} />Tài khoản</Link>
          <Link to="/cart" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 6, background: '#ecfdf5', color: 'var(--main)', padding: '8px 12px', borderRadius: 6, fontWeight: 500 }}>
            <Icon d={I.cart} />Giỏ hàng
            <span style={{ position: 'absolute', top: -6, right: -6, background: 'var(--second)', color: '#fff', fontSize: 11, borderRadius: 99, minWidth: 18, height: 18, padding: '0 4px', display: 'grid', placeItems: 'center' }}>{count}</span>
          </Link>
        </div>
      </div>
      <nav className={`main-nav${open ? ' open' : ''}`} style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: '#fff' }}>
        <button className="show-sm" aria-label="Đóng menu" onClick={() => setOpen(false)} style={{ display: 'none', background: 'none', margin: '12px 16px 0 auto' }}><Icon d={I.x} size={24} /></button>
        <ul className="container nav-list" style={{ display: 'flex', gap: 28, listStyle: 'none' }}>
          {NAV.map((n) => (
            <li key={n.label} className="nav-item" style={{ position: 'relative' }}>
              <NavLink to={n.to} end className={({ isActive }) => `nav-link nav-top${isActive ? ' active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '14px 0', fontWeight: 500, whiteSpace: 'nowrap' }}>
                {n.label}{n.children && <Icon d={I.down} size={16} />}
              </NavLink>
              {n.children && (
                <ul className="dropdown" style={{ listStyle: 'none' }}>
                  {n.children.map(([l, to]) => <li key={to + l}><Link to={to} className="nav-link" style={{ display: 'block', padding: '8px 16px', fontSize: 14, whiteSpace: 'nowrap' }}>{l}</Link></li>)}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {open && <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.4)', zIndex: 29 }} />}
    </header>
  )
}

const FOOT = [
  ['Về Wolf Fan', [['Giới thiệu', '/gioi-thieu'], ['Tuyển dụng', '/tuyen-dung'], ['Đối tác', '/doi-tac'], ['Bán hàng doanh nghiệp', '/ban-hang-doanh-nghiep'], ['Tin tức', '/tin-tuc'], ['Hệ thống cửa hàng', '/he-thong-cua-hang']]],
  ['Chính sách', [['Chính sách bảo mật', '/chinh-sach-bao-mat'], ['Chính sách đổi trả', '/chinh-sach-doi-tra'], ['Chính sách thanh toán', '/chinh-sach-thanh-toan'], ['Chính sách vận chuyển', '/chinh-sach-van-chuyen'], ['Điều khoản dịch vụ', '/dieu-khoan-dich-vu'], ['Câu hỏi thường gặp', '/cau-hoi-thuong-gap']]],
  ['Danh mục', [['Tất cả sản phẩm', '/collections/all'], ['Quạt cây', '/quat-cay'], ['Quạt trần', '/quat-tran'], ['Quạt treo tường', '/quat-treo-tuong'], ['Quạt công nghiệp', '/quat-cong-nghiep'], ['Sản phẩm khuyến mãi', '/san-pham-khuyen-mai']]],
]

function Footer() {
  const [sent, setSent] = useState(false)
  return (
    <footer className="footer" style={{ background: 'var(--footer)', color: '#fff' }}>
      <div style={{ borderBottom: '1px solid rgba(255,255,255,.1)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '32px 16px' }}>
          <div><h3 style={{ fontSize: 22 }}>Đăng ký nhận tin</h3><p style={{ color: '#d1d5db', fontSize: 14, marginTop: 4 }}>Nhận ưu đãi và thông tin sản phẩm mới nhất từ Wolf Fan</p></div>
          {sent ? <p style={{ color: 'var(--second)', display: 'flex', gap: 8, alignItems: 'center' }}><Icon d={I.check} />Cảm ơn bạn đã đăng ký!</p> : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', gap: 8, flex: '1 1 320px', maxWidth: 480 }}>
              <input required type="email" placeholder="Nhập email của bạn..." aria-label="Email" style={{ flex: 1, minWidth: 0, borderRadius: 8, border: 0, padding: '12px 16px', font: 'inherit' }} />
              <button style={{ background: 'var(--second)', color: 'var(--footer)', fontWeight: 600, padding: '0 24px', borderRadius: 8 }}>Đăng ký</button>
            </form>
          )}
        </div>
      </div>
      <div className="container stack-sm" style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(3, 1fr)', gap: 32, padding: '48px 16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, lineHeight: 1.6, color: '#d1d5db' }}>
          <img src={`${CDN}/themes/1151009/assets/footer-logo.png`} alt="Wolf Fan" style={{ height: 60, width: 'auto', alignSelf: 'flex-start' }} />
          <p>Wolf Fan – Mát tự nhiên, sống an nhiên. Chuyên cung cấp các dòng quạt chính hãng chất lượng cao.</p>
          <p style={{ display: 'flex', gap: 8 }}><Icon d={I.pin} size={18} />70 Lữ Gia, Phường Phú Thọ, TP. Hồ Chí Minh</p>
          <p style={{ display: 'flex', gap: 8 }}><Icon d={I.phone} size={18} /><a href="tel:19006750" style={{ color: 'var(--second)' }}>1900 6750</a></p>
          <p style={{ display: 'flex', gap: 8 }}><Icon d={I.mail} size={18} />support@sapo.vn</p>
        </div>
        {FOOT.map(([h, items]) => (
          <div key={h}><h4 style={{ fontSize: 16, marginBottom: 16 }}>{h}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, color: '#d1d5db' }}>{items.map(([x, to]) => <li key={x}><Link to={to}>{x}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', padding: 16, textAlign: 'center', fontSize: 13, color: '#9ca3af' }}>© Bản quyền thuộc về Wolf Themes | Cung cấp bởi Sapo</div>
    </footer>
  )
}

function Toast() {
  const { toast } = useCart()
  if (!toast) return null
  return (
    <div role="status" style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 50, background: 'var(--main)', color: '#fff', padding: '14px 18px', borderRadius: 10, boxShadow: '0 8px 24px rgba(0,0,0,.2)', display: 'flex', gap: 10, alignItems: 'center', maxWidth: 360, fontSize: 14 }}>
      <Icon d={I.check} color="var(--second)" />{toast}<Link to="/cart" style={{ color: 'var(--second)', fontWeight: 600, whiteSpace: 'nowrap' }}>Xem giỏ</Link>
    </div>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}><Outlet /></main>
      <Footer />
      <Toast />
    </div>
  )
}
