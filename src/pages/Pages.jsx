import { useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Breadcrumb, Btn, Field, Icon, I, PageTitle, ProductCard } from '../components/ui.jsx'
import { ArticleCard } from './Home.jsx'
import { articles, products, productMap, useCart, vnd, thumb } from '../store.jsx'

const F = 'https://bizweb.dktcdn.net/100/697/772/files'
const Box = ({ children, style }) => <div style={{ border: '1px solid var(--border)', borderRadius: 16, padding: 24, background: '#fff', ...style }}>{children}</div>
const Wrap = ({ children, narrow }) => <div className="container" style={{ padding: '40px 16px 64px', maxWidth: narrow ? 900 : undefined }}>{children}</div>

export function StaticPage({ page }) {
  return (
    <>
      <Breadcrumb items={[[page.title]]} />
      <Wrap narrow><PageTitle>{page.title}</PageTitle><div className="prose" dangerouslySetInnerHTML={{ __html: page.content }} /></Wrap>
    </>
  )
}

export function About() {
  const badges = [['Chất lượng cao cấp', 'Sản phẩm đạt tiêu chuẩn quốc tế'], ['Thân thiện môi trường', 'Tiết kiệm điện năng, giảm thiểu khí thải'], ['Bảo hành 24 tháng', 'An tâm sử dụng với chế độ bảo hành chính hãng'], ['Giao hàng toàn quốc', 'Miễn phí giao hàng cho đơn từ 500.000đ']]
  const mvv = [['target-light.svg', 'Sứ mệnh', 'Mang đến giải pháp làm mát tự nhiên, an toàn và tiết kiệm điện cho mọi gia đình, góp phần nâng cao chất lượng cuộc sống.'], ['vision.svg', 'Tầm nhìn', 'Trở thành thương hiệu quạt hàng đầu tại Việt Nam và khu vực Đông Nam Á, tiên phong trong công nghệ làm mát bền vững.'], ['flash.svg', 'Giá trị cốt lõi', 'Chất lượng là ưu tiên hàng đầu; Khách hàng là trung tâm; Đổi mới và sáng tạo không ngừng; Trách nhiệm với cộng đồng và môi trường.']]
  const why = [['design-nib.svg', 'Thiết kế hiện đại, tinh tế', 'Phù hợp với mọi không gian sống'], ['nano-technology.svg', 'Công nghệ tiên tiến', 'Vận hành êm ái, làm mát hiệu quả'], ['sun.svg', 'Tiết kiệm điện năng', 'Giảm chi phí điện hàng tháng'], ['safety.svg', 'An toàn cho sức khỏe', 'Chất liệu cao cấp, đạt chuẩn an toàn'], ['heart.svg', 'Dịch vụ tận tâm', 'Hỗ trợ khách hàng nhanh chóng, tận tình']]
  const timeline = [['2015', 'WOLF FAN được thành lập với sứ mệnh mang đến giải pháp làm mát chất lượng cho người Việt.'], ['2017', 'Ra mắt dòng quạt trần và quạt đứng cao cấp, được người tiêu dùng tin tưởng đón nhận.'], ['2019', 'Mở rộng nhà máy sản xuất, ứng dụng công nghệ hiện đại, nâng cao chất lượng sản phẩm.'], ['2021', 'Đạt chứng nhận ISO 9001, khẳng định uy tín và chất lượng sản phẩm trên thị trường.'], ['2026', 'Không ngừng đổi mới và phát triển, hướng đến vị thế thương hiệu hàng đầu trong khu vực.']]
  return (
    <>
      <Breadcrumb items={[['Giới thiệu']]} />
      <Wrap>
        <div className="stack-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ color: '#16a34a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Giới thiệu về</span>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--main)' }}>WOLF FAN</h1>
            <p style={{ lineHeight: 1.7, color: '#444' }}>WOLF FAN là thương hiệu quạt điện cao cấp, mang đến giải pháp làm mát tự nhiên, tiết kiệm điện và thân thiện với môi trường.</p>
            <p style={{ lineHeight: 1.7, color: '#444' }}>Chúng tôi không ngừng nghiên cứu và cải tiến để tạo ra những sản phẩm chất lượng, bền bỉ và an toàn cho mọi gia đình Việt.</p>
            <Link to="/collections/all"><Btn>Khám phá sản phẩm <Icon d={I.arrow} size={16} /></Btn></Link>
          </div>
          <img src={`${F}/about-hero.jpg`} alt="Wolf Fan" style={{ borderRadius: 20, width: '100%' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginTop: 40 }}>
          {badges.map(([t, d], i) => <Box key={t} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 16 }}><img src={`${F}/trust-badges-${i + 1}.svg`} alt="" style={{ width: 44 }} /><div><strong>{t}</strong><p style={{ fontSize: 13, color: '#666', marginTop: 2 }}>{d}</p></div></Box>)}
        </div>
      </Wrap>
      <section style={{ background: '#f4f7f4', padding: '64px 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: 30, color: 'var(--main)', marginBottom: 32 }}>Sứ mệnh - Tầm nhìn - Giá trị cốt lõi</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {mvv.map(([ic, t, d]) => <Box key={t} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}><img src={`${F}/${ic}`} alt="" style={{ width: 48 }} /><h3 style={{ color: 'var(--main)', textTransform: 'uppercase' }}>{t}</h3><p style={{ lineHeight: 1.7, color: '#555' }}>{d}</p></Box>)}
          </div>
        </div>
      </section>
      <section className="container stack-sm" style={{ padding: '64px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
        <div><h2 style={{ fontSize: 30, color: 'var(--main)', marginBottom: 24 }}>Vì sao chọn Wolf Fan?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>{why.map(([ic, t, d]) => <div key={t} style={{ display: 'flex', gap: 16, alignItems: 'center' }}><img src={`${F}/${ic}`} alt="" style={{ width: 40 }} /><div><strong>{t}</strong><p style={{ fontSize: 14, color: '#666' }}>{d}</p></div></div>)}</div>
        </div>
        <img src={`${F}/about-why.jpg`} alt="Vì sao chọn Wolf Fan" style={{ borderRadius: 20, width: '100%' }} />
      </section>
      <section style={{ background: 'var(--main)', color: '#fff', padding: '64px 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: 30, marginBottom: 32 }}>Hành trình phát triển</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {timeline.map(([y, d]) => <div key={y} style={{ borderTop: '3px solid var(--second)', paddingTop: 16 }}><strong style={{ fontSize: 28, color: 'var(--second)' }}>{y}</strong><p style={{ marginTop: 8, lineHeight: 1.6, color: '#e5e7eb', fontSize: 14 }}>{d}</p></div>)}
          </div>
        </div>
      </section>
    </>
  )
}

export function Series() {
  const S = [['Quạt đứng', 'natural-series.jpg', 'Lấy cảm hứng từ thiên nhiên, mang đến làn gió mát lành và trong trẻo', '/quat-dung'], ['Quạt trần', 'quat-tran.jpg', 'Thiết kế sang trọng, đẳng cấp, nâng tầm không gian sống', '/quat-tran'], ['Quạt treo tường', 'quat-treo-tuong.jpg', 'Gọn gàng, linh hoạt, làm mát mọi góc không gian', '/quat-treo-tuong'], ['Quạt tích điện', 'quat-tich-dien.jpg', 'Tích điện tiện lợi, làm mát mọi lúc, mọi nơi', '/quat-tich-dien'], ['Quạt Mini', 'quat-mini.jpg', 'Nhỏ gọn, tinh tế, đồng hành cùng bạn mỗi ngày.', '/quat-de-ban-quat-hop'], ['Phụ kiện Quạt', 'phu-kien.jpg', 'Phụ kiện chính hãng, bền bỉ và an toàn.', '/collections/all']]
  const feats = [['nano-technology.svg', 'Thiết kế hiện đại', 'Tinh tế trong từng chi tiết'], ['fan-01.svg', 'Công nghệ tiên tiến', 'Làm mát mạnh mẽ, vận hành êm ái'], ['flash.svg', 'Tiết kiệm điện năng', 'Hiệu quả tối ưu'], ['medal.svg', 'Chất lượng bền bỉ', 'Độ bền cao, an tâm sử dụng'], ['leaf.svg', 'Thân thiện môi trường', 'Vì không gian sống xanh']]
  return (
    <>
      <Breadcrumb items={[['Bộ sưu tập']]} />
      <Wrap>
        <PageTitle sub="Khám phá các bộ sưu tập quạt được thiết kế tinh tế từ Wolf Fan, đáp ứng mọi nhu cầu làm mát và phong cách không gian sống của bạn.">Bộ sưu tập</PageTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 40 }}>
          {feats.map(([ic, t, d]) => <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'center', background: '#f4f7f4', borderRadius: 12, padding: 14 }}><img src={`${F}/${ic}`} alt="" style={{ width: 36 }} /><div><strong style={{ fontSize: 14 }}>{t}</strong><p style={{ fontSize: 12, color: '#666' }}>{d}</p></div></div>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
          {S.map(([t, img, d, to]) => (
            <Link key={t} to={to} className="card" style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3', display: 'block' }}>
              <img src={`https://bizweb.dktcdn.net/thumb/large/100/697/772/collections/${img}`} alt={t} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,.65), rgba(0,0,0,0) 60%)', color: '#fff', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 6 }}>
                <span style={{ fontSize: 12, letterSpacing: 1 }}>BỘ SƯU TẬP</span><h2 style={{ fontSize: 24 }}>{t}</h2><p style={{ fontSize: 14, color: '#e5e7eb' }}>{d}</p>
                <span style={{ display: 'flex', gap: 6, alignItems: 'center', fontWeight: 500, color: 'var(--second)' }}>Khám phá ngay <Icon d={I.arrow} size={16} /></span>
              </div>
            </Link>
          ))}
        </div>
      </Wrap>
    </>
  )
}

export function Blog() {
  return (
    <>
      <Breadcrumb items={[['Tin tức']]} />
      <Wrap>
        <PageTitle sub="Wolf Fan mang đến những sản phẩm quạt chất lượng cao với công nghệ tiên tiến, giúp không gian sống của bạn luôn mát mẻ, trong lành và tiết kiệm năng lượng.">Tin tức</PageTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>{articles.map((a) => <ArticleCard key={a.handle} a={a} />)}</div>
      </Wrap>
    </>
  )
}

export function Article({ a }) {
  const others = articles.filter((x) => x.handle !== a.handle).slice(0, 4)
  return (
    <>
      <Breadcrumb items={[['Tin tức', '/tin-tuc'], [a.title]]} />
      <div className="container stack-sm" style={{ padding: '40px 16px 64px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 40, alignItems: 'start' }}>
        <article>
          <h1 style={{ fontSize: 'clamp(24px, 3vw, 34px)', color: 'var(--main)', lineHeight: 1.35 }}>{a.title}</h1>
          <p style={{ color: '#777', fontSize: 14, margin: '12px 0 24px', display: 'flex', gap: 16 }}><span>✍️ Wolf Theme</span><span>📅 {a.date}</span></p>
          <img src={a.image} alt={a.title} style={{ width: '100%', borderRadius: 16, marginBottom: 24 }} />
          <div className="prose" dangerouslySetInnerHTML={{ __html: a.content }} />
        </article>
        <aside style={{ position: 'sticky', top: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h3 style={{ color: 'var(--main)' }}>Bài viết khác</h3>
          {others.map((o) => (
            <Link key={o.handle} to={'/' + o.handle} style={{ display: 'flex', gap: 12 }}>
              <img src={thumb(o.image, 'medium')} alt="" style={{ width: 90, height: 64, objectFit: 'cover', borderRadius: 8, flexShrink: 0 }} />
              <div><p className="clamp2 nav-link" style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.4 }}>{o.title}</p><span style={{ fontSize: 12, color: '#888' }}>{o.date}</span></div>
            </Link>
          ))}
        </aside>
      </div>
    </>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)
  const info = [[I.phone, 'Hotline', '1900 6750', 'Hỗ trợ 24/7'], [I.mail, 'Email', 'support@sapo.vn', 'Phản hồi trong 24h'], [I.pin, 'Địa chỉ', '70 Lữ Gia, Phường Phú Thọ, TP. Hồ Chí Minh', 'Tham quan cửa hàng'], [I.clock, 'Giờ làm việc', 'Thứ 2 - Chủ nhật', '8:00 - 22:00']]
  return (
    <>
      <Breadcrumb items={[['Liên hệ']]} />
      <Wrap>
        <PageTitle>Thông tin liên hệ</PageTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 40 }}>
          {info.map(([ic, t, v, s]) => <Box key={t} style={{ display: 'flex', gap: 14, padding: 20 }}><span style={{ width: 44, height: 44, borderRadius: 99, background: '#ecfdf5', color: 'var(--main)', display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icon d={ic} /></span><div><span style={{ fontSize: 13, color: '#777' }}>{t}</span><p style={{ fontWeight: 600, color: 'var(--main)' }}>{v}</p><span style={{ fontSize: 13, color: '#777' }}>{s}</span></div></Box>)}
        </div>
        <div className="stack-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <Box>
            <h2 style={{ color: 'var(--main)', marginBottom: 20, fontSize: 22 }}>Gửi tin nhắn cho chúng tôi</h2>
            {sent ? <p style={{ color: '#16a34a', display: 'flex', gap: 8 }}><Icon d={I.check} />Cảm ơn bạn! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p> : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <Field label="Họ và tên" required />
                <div className="stack-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}><Field label="Email" type="email" required /><Field label="Số điện thoại" type="tel" required /></div>
                <Field label="Nội dung" as="textarea" required />
                <Btn type="submit">Gửi tin nhắn</Btn>
              </form>
            )}
          </Box>
          <iframe title="Bản đồ" src="https://www.google.com/maps?q=70+L%E1%BB%AF+Gia,+Ph%C3%BA+Th%E1%BB%8D,+H%E1%BB%93+Ch%C3%AD+Minh&output=embed" style={{ width: '100%', minHeight: 420, border: 0, borderRadius: 16 }} loading="lazy" />
        </div>
        <p style={{ marginTop: 32, textAlign: 'center', color: '#555' }}>Xem thêm các câu hỏi thường gặp về sản phẩm, vận chuyển, bảo hành tại trang <Link to="/cau-hoi-thuong-gap" style={{ color: '#16a34a', fontWeight: 500 }}>Câu hỏi thường gặp ➔</Link></p>
      </Wrap>
    </>
  )
}

const STORES = [
  ['Hồ Chí Minh', 'Wolf Fan Lữ Gia', '70 Lữ Gia, Phường Phú Thọ, TP. Hồ Chí Minh'],
  ['Hồ Chí Minh', 'Wolf Fan Quận 1', '45 Nguyễn Thị Minh Khai, Phường Bến Nghé, TP. Hồ Chí Minh'],
  ['Hà Nội', 'Wolf Fan Cầu Giấy', '266 Đội Cấn, Phường Liễu Giai, Hà Nội'],
  ['Hà Nội', 'Wolf Fan Hai Bà Trưng', '120 Bạch Mai, Phường Bạch Mai, Hà Nội'],
  ['Đà Nẵng', 'Wolf Fan Hải Châu', '88 Nguyễn Văn Linh, Phường Hải Châu, Đà Nẵng'],
]
export function Stores() {
  const [city, setCity] = useState('')
  const [sel, setSel] = useState(0)
  const list = STORES.filter((s) => !city || s[0] === city)
  const cur = list[sel] || list[0]
  return (
    <>
      <Breadcrumb items={[['Hệ thống cửa hàng']]} />
      <Wrap>
        <PageTitle sub="Tìm cửa hàng Wolf Fan gần bạn nhất để trải nghiệm sản phẩm trực tiếp.">Hệ thống cửa hàng</PageTitle>
        <div className="stack-sm" style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 24 }}>
          <Box style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <select value={city} onChange={(e) => { setCity(e.target.value); setSel(0) }} aria-label="Tỉnh thành" style={{ border: '1px solid var(--border)', borderRadius: 8, padding: 12, font: 'inherit' }}>
              <option value="">Tất cả tỉnh thành</option>{[...new Set(STORES.map((s) => s[0]))].map((c) => <option key={c}>{c}</option>)}
            </select>
            {list.map((s, i) => (
              <button key={s[1]} onClick={() => setSel(i)} style={{ textAlign: 'left', padding: 14, borderRadius: 10, background: cur === s ? '#ecfdf5' : '#fff', border: `1px solid ${cur === s ? 'var(--main)' : 'var(--border)'}`, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <strong style={{ color: 'var(--main)' }}>{s[1]}</strong><span style={{ fontSize: 13, color: '#555', display: 'flex', gap: 6 }}><Icon d={I.pin} size={14} />{s[2]}</span><span style={{ fontSize: 13, color: '#555' }}>☎ 1900 6750 · 8:00 - 22:00</span>
              </button>
            ))}
          </Box>
          {cur && <iframe title="Bản đồ cửa hàng" src={`https://www.google.com/maps?q=${encodeURIComponent(cur[2])}&output=embed`} style={{ width: '100%', minHeight: 480, border: 0, borderRadius: 16 }} loading="lazy" />}
        </div>
      </Wrap>
    </>
  )
}

export function Cart() {
  const { items, setQty, remove, total, clear } = useCart()
  const nav = useNavigate()
  const rows = items.map((i) => ({ ...i, p: productMap[i.handle] })).filter((r) => r.p)
  return (
    <>
      <Breadcrumb items={[['Giỏ hàng']]} />
      <Wrap>
        <PageTitle>Giỏ hàng của bạn</PageTitle>
        {!rows.length ? (
          <Box style={{ textAlign: 'center', padding: 56, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <Icon d={I.cart} size={48} color="#9ca3af" /><p style={{ color: '#555' }}>Giỏ hàng của bạn đang trống</p>
            <Link to="/collections/all"><Btn>Tiếp tục mua sắm</Btn></Link>
          </Box>
        ) : (
          <div className="stack-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24, alignItems: 'start' }}>
            <Box style={{ padding: 0 }}>
              {rows.map(({ p, qty }) => (
                <div key={p.handle} style={{ display: 'flex', gap: 16, padding: 16, borderBottom: '1px solid var(--border)', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Link to={'/' + p.handle}><img src={thumb(p.images[0], 'medium')} alt="" style={{ width: 80, height: 80, objectFit: 'contain', border: '1px solid var(--border)', borderRadius: 8 }} /></Link>
                  <div style={{ flex: '1 1 200px' }}><Link to={'/' + p.handle} style={{ fontWeight: 500 }}>{p.name}</Link><p style={{ color: 'var(--price)', fontWeight: 600, marginTop: 4 }}>{vnd(p.price)}</p></div>
                  <div style={{ display: 'flex', border: '1px solid var(--border)', borderRadius: 8 }}>
                    <button onClick={() => setQty(p.handle, qty - 1)} style={{ width: 34, background: 'none' }} aria-label="Giảm">−</button>
                    <span style={{ width: 36, textAlign: 'center', lineHeight: '34px' }}>{qty}</span>
                    <button onClick={() => setQty(p.handle, qty + 1)} style={{ width: 34, background: 'none' }} aria-label="Tăng">+</button>
                  </div>
                  <strong style={{ minWidth: 110, textAlign: 'right' }}>{vnd(p.price * qty)}</strong>
                  <button onClick={() => remove(p.handle)} aria-label="Xoá" style={{ background: 'none', color: '#999' }}><Icon d={I.trash} size={18} /></button>
                </div>
              ))}
              <div style={{ padding: 16, display: 'flex', justifyContent: 'space-between' }}><Link to="/collections/all" style={{ color: '#16a34a' }}>← Tiếp tục mua sắm</Link><button onClick={clear} style={{ background: 'none', color: 'var(--price)' }}>Xoá tất cả</button></div>
            </Box>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <h3 style={{ color: 'var(--main)' }}>Tóm tắt đơn hàng</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Tạm tính</span><span>{vnd(total)}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Phí vận chuyển</span><span style={{ color: '#16a34a' }}>{total >= 300000 ? 'Miễn phí' : vnd(30000)}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: 14, fontSize: 18 }}><strong>Tổng cộng</strong><strong style={{ color: 'var(--price)' }}>{vnd(total + (total >= 300000 ? 0 : 30000))}</strong></div>
              <Btn onClick={() => nav('/checkout')}>Tiến hành thanh toán</Btn>
            </Box>
          </div>
        )}
      </Wrap>
    </>
  )
}

export function Checkout() {
  const { items, total, clear } = useCart()
  const [done, setDone] = useState(null)
  const [pay, setPay] = useState('cod')
  const ship = total >= 300000 ? 0 : 30000
  if (done) return (
    <Wrap narrow><Box style={{ textAlign: 'center', padding: 48, display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
      <span style={{ width: 64, height: 64, borderRadius: 99, background: '#ecfdf5', display: 'grid', placeItems: 'center' }}><Icon d={I.check} size={32} color="#16a34a" /></span>
      <h1 style={{ color: 'var(--main)' }}>Đặt hàng thành công!</h1><p>Mã đơn hàng: <strong>#{done}</strong>. Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.</p>
      <Link to="/"><Btn>Về trang chủ</Btn></Link>
    </Box></Wrap>
  )
  if (!items.length) return <Wrap narrow><Box style={{ textAlign: 'center' }}><p>Giỏ hàng trống. <Link to="/collections/all" style={{ color: '#16a34a' }}>Mua sắm ngay</Link></p></Box></Wrap>
  return (
    <>
      <Breadcrumb items={[['Giỏ hàng', '/cart'], ['Thanh toán']]} />
      <Wrap>
        <form onSubmit={(e) => { e.preventDefault(); clear(); setDone(Math.floor(100000 + Math.random() * 900000)) }} className="stack-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 24, alignItems: 'start' }}>
          <Box style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <h2 style={{ color: 'var(--main)', fontSize: 22 }}>Thông tin nhận hàng</h2>
            <Field label="Họ và tên" required />
            <div className="stack-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}><Field label="Số điện thoại" type="tel" required /><Field label="Email" type="email" /></div>
            <Field label="Địa chỉ" required />
            <Field label="Ghi chú" as="textarea" />
            <h2 style={{ color: 'var(--main)', fontSize: 22, marginTop: 8 }}>Phương thức thanh toán</h2>
            {[['cod', 'Thanh toán khi nhận hàng (COD)'], ['bank', 'Chuyển khoản ngân hàng'], ['vnpay', 'Thanh toán qua VNPAY (giảm thêm 5%)']].map(([v, l]) => (
              <label key={v} style={{ display: 'flex', gap: 10, alignItems: 'center', border: `1px solid ${pay === v ? 'var(--main)' : 'var(--border)'}`, borderRadius: 10, padding: 14, cursor: 'pointer' }}><input type="radio" name="pay" checked={pay === v} onChange={() => setPay(v)} style={{ accentColor: 'var(--main)' }} />{l}</label>
            ))}
          </Box>
          <Box style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h3 style={{ color: 'var(--main)' }}>Đơn hàng ({items.length} sản phẩm)</h3>
            {items.map((i) => { const p = productMap[i.handle]; return p && <div key={i.handle} style={{ display: 'flex', gap: 10, fontSize: 14 }}><img src={thumb(p.images[0], 'small')} alt="" style={{ width: 48, height: 48, objectFit: 'contain' }} /><span style={{ flex: 1 }}>{p.name} × {i.qty}</span><strong>{vnd(p.price * i.qty)}</strong></div> })}
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: 12 }}><span>Phí vận chuyển</span><span>{ship ? vnd(ship) : 'Miễn phí'}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18 }}><strong>Tổng cộng</strong><strong style={{ color: 'var(--price)' }}>{vnd(total + ship)}</strong></div>
            <Btn type="submit">Đặt hàng</Btn>
          </Box>
        </form>
      </Wrap>
    </>
  )
}

export function Auth({ mode }) {
  const [done, setDone] = useState(false)
  const login = mode === 'login'
  return (
    <>
      <Breadcrumb items={[[login ? 'Đăng nhập' : 'Đăng ký']]} />
      <div className="container" style={{ padding: '48px 16px 64px', maxWidth: 480 }}>
        <Box style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h1 style={{ textAlign: 'center', color: 'var(--main)', fontSize: 26 }}>{login ? 'Đăng nhập tài khoản' : 'Đăng ký tài khoản'}</h1>
          {done ? <p style={{ textAlign: 'center', color: '#16a34a' }}>{login ? 'Đăng nhập thành công (demo).' : 'Đăng ký thành công (demo).'} <Link to="/" style={{ textDecoration: 'underline' }}>Về trang chủ</Link></p> : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {!login && <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}><Field label="Họ" required /><Field label="Tên" required /></div>}
              {!login && <Field label="Số điện thoại" type="tel" required />}
              <Field label="Email" type="email" required />
              <Field label="Mật khẩu" type="password" required minLength={6} />
              <Btn type="submit">{login ? 'Đăng nhập' : 'Đăng ký'}</Btn>
            </form>
          )}
          <p style={{ textAlign: 'center', fontSize: 14 }}>{login ? <>Chưa có tài khoản? <Link to="/account/register" style={{ color: '#16a34a', fontWeight: 500 }}>Đăng ký ngay</Link></> : <>Đã có tài khoản? <Link to="/account/login" style={{ color: '#16a34a', fontWeight: 500 }}>Đăng nhập</Link></>}</p>
        </Box>
      </div>
    </>
  )
}

const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd').toLowerCase()
export function Search() {
  const [sp] = useSearchParams()
  const q = sp.get('q') || ''
  const res = useMemo(() => { const n = norm(q); return n ? products.filter((p) => norm(`${p.name} ${p.vendor} ${p.type}`).includes(n)) : [] }, [q])
  return (
    <>
      <Breadcrumb items={[['Tìm kiếm']]} />
      <Wrap>
        <PageTitle sub={q ? `Tìm thấy ${res.length} sản phẩm cho từ khóa "${q}"` : 'Nhập từ khóa để tìm sản phẩm.'}>Kết quả tìm kiếm</PageTitle>
        {res.length > 0 ? <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 16 }}>{res.map((p) => <ProductCard key={p.handle} p={p} />)}</div>
          : q && <p style={{ color: '#555' }}>Không tìm thấy sản phẩm phù hợp. <Link to="/collections/all" style={{ color: '#16a34a' }}>Xem tất cả sản phẩm</Link></p>}
      </Wrap>
    </>
  )
}

export function NotFound() {
  return (
    <Wrap narrow><div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', padding: '48px 0' }}>
      <strong style={{ fontSize: 96, color: 'var(--main)', lineHeight: 1 }}>404</strong><p style={{ color: '#555' }}>Không tìm thấy trang bạn yêu cầu.</p><Link to="/"><Btn>Về trang chủ</Btn></Link>
    </div></Wrap>
  )
}
