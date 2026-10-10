import { useEffect, useState } from 'react'
import { IMG, slides, nav, flash, ceiling, standing, categories, collections } from './data.js'

const vnd = (n) => n.toLocaleString('vi-VN') + '₫'
const Icon = ({ d, size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
)
const I = {
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm10 2-4.35-4.35',
  phone: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  cart: 'M6 6h15l-1.5 9h-12zM6 6 5 3H2m7 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  down: 'm6 9 6 6 6-6',
  bolt: 'M13 2 3 14h9l-1 8 10-12h-9z',
  star: 'm12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z',
}

function Header() {
  return (
    <header>
      <a href="#"><img src={IMG.topBanner} alt="Ưu đãi hè" style={{ width: '100%', height: 'auto' }} /></a>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '16px' }}>
        <a href="#"><img src={IMG.logo} alt="Wolf Fan" style={{ height: 64, width: 'auto' }} /></a>
        <form onSubmit={(e) => e.preventDefault()} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, border: '2px solid var(--border)', borderRadius: 8, padding: '4px 4px 4px 16px', maxWidth: 640 }}>
          <Icon d={I.search} color="#888" />
          <input placeholder="Bạn cần tìm sản phẩm gì?" style={{ flex: 1, border: 0, outline: 0, font: 'inherit', fontSize: 14, padding: 8 }} />
          <button className="btn-main" style={{ background: 'var(--main)', color: '#fff', padding: '10px 24px', borderRadius: 6, fontWeight: 500 }}>Tìm kiếm</button>
        </form>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginLeft: 'auto' }}>
          <div className="hide-md" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon d={I.phone} size={26} />
            <div><a href="tel:19006750" style={{ fontWeight: 600, fontSize: 18, color: 'var(--main)' }}>1900 6750</a><div style={{ fontSize: 13, color: '#555' }}>Hỗ trợ 24/7</div></div>
          </div>
          <a href="#" className="hide-sm" style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500 }}><Icon d={I.user} />Tài khoản</a>
          <a href="#" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 6, background: '#ecfdf5', color: 'var(--main)', padding: '8px 12px', borderRadius: 6, fontWeight: 500 }}>
            <Icon d={I.cart} />Giỏ hàng
            <span style={{ position: 'absolute', top: -6, right: -6, background: 'var(--second)', color: '#fff', fontSize: 11, borderRadius: 99, width: 18, height: 18, display: 'grid', placeItems: 'center' }}>0</span>
          </a>
        </div>
      </div>
      <nav className="hide-sm" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <ul className="container" style={{ display: 'flex', gap: 28, listStyle: 'none', overflowX: 'auto' }}>
          {nav.map((n, i) => (
            <li key={n}><a href="#" className={`nav-link${i === 0 ? ' active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '14px 0', fontWeight: 500, whiteSpace: 'nowrap', borderBottom: i === 0 ? '3px solid #16a34a' : '3px solid transparent' }}>
              {n}{[1, 2, 3, 8].includes(i) && <Icon d={I.down} size={16} />}
            </a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000); return () => clearInterval(t) }, [])
  const s = slides[i]
  return (
    <section style={{ position: 'relative', height: 'min(56vw, 640px)', minHeight: 420, overflow: 'hidden' }}>
      <img src={IMG.slides[i]} alt={s.tag} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,.45), rgba(0,0,0,0) 60%)' }} />
      <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20, color: '#fff' }}>
        <span style={{ alignSelf: 'flex-start', background: '#fff', color: 'var(--text)', padding: '8px 16px', borderRadius: 99, fontSize: 14, fontWeight: 500, textTransform: 'uppercase' }}>{s.tag}</span>
        <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 60px)', lineHeight: 1.2, fontWeight: 700 }}>{s.t1}<br /><span style={{ color: '#facc15' }}>{s.t2}</span></h2>
        <p style={{ maxWidth: 520, fontSize: 16, lineHeight: 1.6 }}>{s.desc}</p>
        <a href="#flash" className="btn-main" style={{ alignSelf: 'flex-start', background: 'var(--main)', padding: '14px 48px', borderRadius: 99, fontWeight: 500 }}>{s.cta}</a>
      </div>
      <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 8 }}>
        {slides.map((_, k) => <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)} style={{ width: k === i ? 28 : 10, height: 10, borderRadius: 99, background: k === i ? '#fff' : 'rgba(255,255,255,.5)', transition: 'width .3s' }} />)}
      </div>
    </section>
  )
}

function ProductCard({ p }) {
  const off = p.old ? Math.round((1 - p.price / p.old) * 100) : 0
  return (
    <div className="card" style={{ position: 'relative', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'box-shadow .2s' }}>
      {off > 0 && <span style={{ position: 'absolute', top: 10, left: 10, zIndex: 1, background: 'var(--price)', color: '#fff', fontSize: 12, fontWeight: 600, padding: '3px 8px', borderRadius: 6 }}>-{off}%</span>}
      <a href="#" className="card-img" style={{ aspectRatio: '1', padding: 12 }}><img src={p.img} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></a>
      <div style={{ padding: '0 12px 12px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <h3 className="clamp2" style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.45, minHeight: 40 }}><a href="#">{p.name}</a></h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#777' }}><Icon d={I.star} size={14} color="#f59e0b" />0.0 <span>(0 đánh giá)</span></div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
          <strong style={{ color: 'var(--price)', fontSize: 16 }}>{vnd(p.price)}</strong>
          {p.old && <del style={{ color: '#999', fontSize: 13 }}>{vnd(p.old)}</del>}
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
          <button className="btn-main" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'var(--main)', color: '#fff', padding: '9px 0', borderRadius: 8, fontSize: 14 }}><Icon d={I.cart} size={16} />{p.opt ? 'Tuỳ chọn' : 'Mua hàng'}</button>
          <button aria-label="Yêu thích" style={{ width: 38, display: 'grid', placeItems: 'center', border: '1px solid #e5e7eb', background: '#fff', borderRadius: 8 }}><Icon d={I.heart} size={16} /></button>
        </div>
      </div>
    </div>
  )
}

function useCountdown(target) {
  const [now, setNow] = useState(Date.now())
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t) }, [])
  const s = Math.max(0, Math.floor((target - now) / 1000))
  return [Math.floor(s / 86400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60]
}

function FlashSale() {
  const [target] = useState(() => Date.now() + 82 * 86400000 + 21 * 3600000)
  const t = useCountdown(target)
  return (
    <section id="flash" className="container" style={{ padding: '48px 16px' }}>
      <div style={{ background: '#0b5131', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 32, fontWeight: 700 }}><Icon d={I.bolt} size={30} color="#facc15" />FLASH <span style={{ color: '#facc15' }}>SALE</span></h2>
            <p style={{ fontSize: 14, opacity: 0.9 }}>DEAL CHỚP NHOÁNG – GIÁ CỰC SỐC</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 14 }}>Kết thúc sau</span>
            {['NGÀY', 'GIỜ', 'PHÚT', 'GIÂY'].map((l, k) => (
              <div key={l} style={{ background: '#fff', color: 'var(--main)', borderRadius: 8, padding: '6px 10px', textAlign: 'center', minWidth: 52 }}>
                <div style={{ fontSize: 20, fontWeight: 700 }}>{String(t[k]).padStart(2, '0')}</div><div style={{ fontSize: 10 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid-products">{flash.map((p) => <ProductCard key={p.name} p={p} />)}</div>
        <a href="#" style={{ alignSelf: 'center', display: 'flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--main)', padding: '12px 32px', borderRadius: 99, fontWeight: 500 }}>Xem tất cả deal <Icon d={I.arrow} size={16} /></a>
      </div>
    </section>
  )
}

function SectionHead({ tag, t1, t2, desc, link, light }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ color: light ? 'var(--second)' : '#16a34a', fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>{tag}</span>
        <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.25, color: light ? '#fff' : 'var(--main)' }}>{t1}<br /><span style={{ color: light ? '#facc15' : '#16a34a' }}>{t2}</span></h2>
        {desc && <p style={{ color: light ? '#e5e7eb' : '#555', maxWidth: 520, lineHeight: 1.6 }}>{desc}</p>}
      </div>
      {link && <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500, color: light ? '#fff' : 'var(--main)', borderBottom: '1px solid currentColor', paddingBottom: 2 }}>{link} <Icon d={I.arrow} size={16} /></a>}
    </div>
  )
}

function Categories() {
  return (
    <section style={{ background: '#f4f7f4', padding: '64px 0' }}>
      <div className="container">
        <SectionHead tag="Danh mục sản phẩm" t1="Lựa chọn sản phẩm phù hợp" t2="Cho không gian của bạn" desc="Đa dạng danh mục quạt với thiết kế hiện đại, hiệu suất mạnh mẽ và tiết kiệm điện năng" link="Xem tất cả danh mục" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {categories.map((c) => (
            <a key={c.name} href="#" className="cat" style={{ background: '#fff', border: '1px solid transparent', borderRadius: 12, padding: 16, display: 'flex', alignItems: 'center', gap: 12, transition: 'border-color .2s' }}>
              <img src={c.img} alt={c.name} loading="lazy" style={{ width: 64, height: 64, objectFit: 'contain', borderRadius: 8 }} />
              <div><h3 style={{ fontSize: 15, fontWeight: 500 }}>{c.name}</h3><p style={{ fontSize: 13, color: '#777', marginTop: 4 }}>{c.count} sản phẩm</p></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Collections() {
  return (
    <section className="container" style={{ padding: '64px 16px' }}>
      <SectionHead tag="Bộ sưu tập quạt" t1="Gió mát tự nhiên" t2="Cho không gian sống" desc="Thiết kế hiện đại – Hiệu suất mạnh mẽ. Mang đến luồng gió tự nhiên, êm ái và tiết kiệm điện" link="Xem tất cả Bộ sưu tập" />
      <div className="stack-sm" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {collections.map((c) => (
          <article key={c.name} style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '4/5' }}>
            <img src={c.img} alt={c.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,.6), rgba(0,0,0,0) 55%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 24, color: '#fff', gap: 8 }}>
              <span style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Bộ sưu tập</span>
              <h3 style={{ fontSize: 26, lineHeight: 1.2 }}>Quạt<br />{c.name}</h3>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14 }}>Xem chi tiết <Icon d={I.arrow} size={16} /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProductBlock({ img, tag, t1, t2, desc, link, items, bg }) {
  return (
    <section style={{ background: bg, padding: '64px 0' }}>
      <div className="container stack-sm" style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 1fr) 3fr', gap: 24, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SectionHead tag={tag} t1={t1} t2={t2} desc={desc} />
          <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
            <img src={img} alt={tag} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            <a href="#" className="btn-main" style={{ position: 'absolute', left: 16, right: 16, bottom: 16, display: 'flex', justifyContent: 'center', gap: 6, background: 'var(--main)', color: '#fff', padding: '12px', borderRadius: 99, fontSize: 14 }}>{link} <Icon d={I.arrow} size={16} /></a>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>{items.map((p) => <ProductCard key={p.name} p={p} />)}</div>
      </div>
    </section>
  )
}

function Footer() {
  const cols = [
    ['Chính sách', ['Chính sách mua hàng', 'Chính sách thanh toán', 'Chính sách vận chuyển', 'Chính sách đổi trả', 'Chính sách bảo mật']],
    ['Hướng dẫn', ['Hướng dẫn mua hàng', 'Hướng dẫn thanh toán', 'Hướng dẫn giao nhận', 'Điều khoản dịch vụ', 'Câu hỏi thường gặp']],
    ['Danh mục', ['Quạt cây', 'Quạt trần', 'Quạt treo tường', 'Quạt hơi nước', 'Quạt công nghiệp']],
  ]
  return (
    <footer className="footer" style={{ background: 'var(--footer)', color: '#fff', marginTop: 0 }}>
      <div className="container stack-sm" style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(3, 1fr)', gap: 32, padding: '56px 16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, lineHeight: 1.6, color: '#d1d5db' }}>
          <img src={IMG.footerLogo} alt="Wolf Fan" style={{ height: 60, width: 'auto', alignSelf: 'flex-start' }} />
          <p>Wolf Fan – Mát tự nhiên, sống an nhiên. Chuyên cung cấp các dòng quạt chính hãng chất lượng cao.</p>
          <p>Địa chỉ: 70 Lữ Gia, Phường Phú Thọ, TP. Hồ Chí Minh</p>
          <p>Hotline: <a href="tel:19006750" style={{ color: 'var(--second)' }}>1900 6750</a> · Email: support@sapo.vn</p>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}><h4 style={{ fontSize: 16, marginBottom: 16 }}>{h}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, color: '#d1d5db' }}>{items.map((x) => <li key={x}><a href="#">{x}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', padding: 16, textAlign: 'center', fontSize: 13, color: '#9ca3af' }}>© Bản quyền thuộc về Wolf Themes | Cung cấp bởi Sapo</div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FlashSale />
        <Categories />
        <Collections />
        <ProductBlock bg="#fff8eb" img={IMG.ceiling} tag="Quạt trần" t1="Mát lạnh dễ chịu" t2="Cho mọi không gian" desc="Thiết kế hiện đại – Vận hành êm ái – Tiết kiệm điện." link="Xem tất cả Quạt trần" items={ceiling} />
        <ProductBlock bg="#f4f7f4" img={IMG.standing} tag="Quạt cây" t1="Gió mát tự nhiên" t2="Cho không gian sống" desc="Thiết kế hiện đại – Hiệu suất mạnh mẽ." link="Xem tất cả quạt cây" items={standing} />
      </main>
      <Footer />
    </>
  )
}
