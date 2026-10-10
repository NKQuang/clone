import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, I, ProductCard, SectionHead } from '../components/ui.jsx'
import { productMap, getCollectionProducts, collections, articles, thumb } from '../store.jsx'

const C = 'https://bizweb.dktcdn.net/100/697/772'
const slides = [
  { img: `${C}/themes/1151009/assets/slider_1.jpg`, tag: 'Bộ sưu tập mới', t1: 'Không gian sống', t2: 'Tiện nghi & Hiện đại', desc: 'Khám phá bộ sưu tập sản phẩm mới nhất với thiết kế tinh tế, hiệu năng vượt trội và mang lại luồng gió tự nhiên cho ngôi nhà bạn.', cta: 'Khám phá ngay', to: '/collections/all' },
  { img: `${C}/themes/1151009/assets/slider_2.jpg`, tag: 'Khuyến mãi hè', t1: 'Mát lạnh sảng khoái', t2: 'Giảm đến 30%', desc: 'Tận hưởng không gian mát mẻ với các dòng quạt trần cao cấp. Vận hành êm ái, bảo hành động cơ trọn đời.', cta: 'Săn ưu đãi', to: '/san-pham-khuyen-mai' },
]
const pick = (hs) => hs.map((h) => productMap[h]).filter(Boolean)
const FLASH = ['quat-doi-luu-toshiba-f-dsc50xvn-w-20w', 'quat-dung-hitachi-lf-d6rcwm-lf-d6rcgm-trang-xam-24w', 'quat-dung-toshiba-f-lsd10-w-vn-remote', 'quat-dung-dasin-ksm-1845', 'quat-dung-hitachi-co-dong-co-ac-lf-a6rcwm-lf-a6rcgm-trang-xam-55w']
const CEILING = ['quat-tran-nanoco-ncf5462-gl-6-canh-mau-vang', 'quat-tran-nanoco-ncf5653-wl-5-canh', 'quat-tran-nanoco-ncf5631-k-3-canh', 'quat-tran-nanoco-ncf5631-w-3-canh', 'quat-tran-nanoco-ncf5631-gos-3-canh', 'quat-tran-nanoco-ncf5462-pl-6-canh-mau-van-go']
const COLL = [['Phòng Khách', 'quat-phong-khach.jpg'], ['Phòng Ngủ', 'quat-phong-ngu.jpg'], ['Công Nghiệp', 'quat-cong-nghiep.jpg']]

function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000); return () => clearInterval(t) }, [])
  const s = slides[i]
  return (
    <section style={{ position: 'relative', height: 'min(56vw, 640px)', minHeight: 420, overflow: 'hidden' }}>
      <img src={s.img} alt={s.tag} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,.45), rgba(0,0,0,0) 60%)' }} />
      <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20, color: '#fff' }}>
        <span style={{ alignSelf: 'flex-start', background: '#fff', color: 'var(--text)', padding: '8px 16px', borderRadius: 99, fontSize: 14, fontWeight: 500, textTransform: 'uppercase' }}>{s.tag}</span>
        <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 60px)', lineHeight: 1.2, fontWeight: 700 }}>{s.t1}<br /><span style={{ color: '#facc15' }}>{s.t2}</span></h2>
        <p style={{ maxWidth: 520, fontSize: 16, lineHeight: 1.6 }}>{s.desc}</p>
        <Link to={s.to} className="btn-main" style={{ alignSelf: 'flex-start', background: 'var(--main)', padding: '14px 48px', borderRadius: 99, fontWeight: 500 }}>{s.cta}</Link>
      </div>
      <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 8 }}>
        {slides.map((_, k) => <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)} style={{ width: k === i ? 28 : 10, height: 10, borderRadius: 99, background: k === i ? '#fff' : 'rgba(255,255,255,.5)', transition: 'width .3s' }} />)}
      </div>
    </section>
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
    <section className="container" style={{ padding: '48px 16px' }}>
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
        <div className="grid-products">{pick(FLASH).map((p) => <ProductCard key={p.handle} p={p} />)}</div>
        <Link to="/san-pham-khuyen-mai" style={{ alignSelf: 'center', display: 'flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--main)', padding: '12px 32px', borderRadius: 99, fontWeight: 500 }}>Xem tất cả deal <Icon d={I.arrow} size={16} /></Link>
      </div>
    </section>
  )
}

function Categories() {
  return (
    <section style={{ background: '#f4f7f4', padding: '64px 0' }}>
      <div className="container">
        <SectionHead tag="Danh mục sản phẩm" t1="Lựa chọn sản phẩm phù hợp" t2="Cho không gian của bạn" desc="Đa dạng danh mục quạt với thiết kế hiện đại, hiệu suất mạnh mẽ và tiết kiệm điện năng" link="Xem tất cả danh mục" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {collections.filter((c) => c.main).map((c) => (
            <Link key={c.handle} to={'/' + c.handle} className="cat" style={{ background: '#fff', border: '1px solid transparent', borderRadius: 12, padding: 16, display: 'flex', alignItems: 'center', gap: 12, transition: 'border-color .2s' }}>
              <img src={c.image} alt={c.name} loading="lazy" style={{ width: 64, height: 64, objectFit: 'contain', borderRadius: 8 }} />
              <div><h3 style={{ fontSize: 15, fontWeight: 500 }}>{c.name}</h3><p style={{ fontSize: 13, color: '#777', marginTop: 4 }}>{c.products.length} sản phẩm</p></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Collections() {
  return (
    <section className="container" style={{ padding: '64px 16px' }}>
      <SectionHead tag="Bộ sưu tập quạt" t1="Gió mát tự nhiên" t2="Cho không gian sống" desc="Thiết kế hiện đại – Hiệu suất mạnh mẽ. Mang đến luồng gió tự nhiên, êm ái và tiết kiệm điện" link="Xem tất cả Bộ sưu tập" to="/bo-suu-tap" />
      <div className="stack-sm" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {COLL.map(([name, img]) => (
          <Link to="/bo-suu-tap" key={name} style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '4/5', display: 'block' }}>
            <img src={`${C}/files/${img}`} alt={name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,.6), rgba(0,0,0,0) 55%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 24, color: '#fff', gap: 8 }}>
              <span style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Bộ sưu tập</span>
              <h3 style={{ fontSize: 26, lineHeight: 1.2 }}>Quạt<br />{name}</h3>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14 }}>Xem chi tiết <Icon d={I.arrow} size={16} /></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function ProductBlock({ img, tag, t1, t2, desc, link, to, items, bg }) {
  return (
    <section style={{ background: bg, padding: '64px 0' }}>
      <div className="container stack-sm" style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 1fr) 3fr', gap: 24, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SectionHead tag={tag} t1={t1} t2={t2} desc={desc} />
          <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
            <img src={img} alt={tag} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            <Link to={to} className="btn-main" style={{ position: 'absolute', left: 16, right: 16, bottom: 16, display: 'flex', justifyContent: 'center', gap: 6, background: 'var(--main)', color: '#fff', padding: 12, borderRadius: 99, fontSize: 14 }}>{link} <Icon d={I.arrow} size={16} /></Link>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>{items.map((p) => <ProductCard key={p.handle} p={p} />)}</div>
      </div>
    </section>
  )
}

export function ArticleCard({ a }) {
  return (
    <Link to={'/' + a.handle} className="card" style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'box-shadow .2s' }}>
      <div style={{ position: 'relative', aspectRatio: '16/10' }}>
        <img src={thumb(a.image)} alt={a.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <span style={{ position: 'absolute', top: 12, left: 12, background: 'var(--main)', color: '#fff', fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 6 }}>{a.date}</span>
      </div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <h3 className="clamp2" style={{ fontSize: 16, lineHeight: 1.45 }}>{a.title}</h3>
        <p className="clamp2" style={{ fontSize: 14, color: '#666', lineHeight: 1.6 }}>{a.excerpt}</p>
        <span style={{ marginTop: 'auto', color: '#16a34a', fontWeight: 500, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>Xem chi tiết <Icon d={I.arrow} size={14} /></span>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <FlashSale />
      <Categories />
      <Collections />
      <ProductBlock bg="#fff8eb" img={`${C}/files/quat-tran-product_1_.jpg`} tag="Quạt trần" t1="Mát lạnh dễ chịu" t2="Cho mọi không gian" desc="Thiết kế hiện đại – Vận hành êm ái – Tiết kiệm điện." link="Xem tất cả Quạt trần" to="/quat-tran" items={pick(CEILING)} />
      <ProductBlock bg="#f4f7f4" img={`${C}/files/quat-cay-block.jpg`} tag="Quạt cây" t1="Gió mát tự nhiên" t2="Cho không gian sống" desc="Thiết kế hiện đại – Hiệu suất mạnh mẽ." link="Xem tất cả quạt cây" to="/quat-cay" items={getCollectionProducts('quat-cay').slice(0, 8)} />
      <section className="container" style={{ padding: '64px 16px' }}>
        <SectionHead tag="Tin tức" t1="Cập nhật tin tức" t2="& xu hướng mới nhất" link="Xem tất cả tin tức" to="/tin-tuc" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>{articles.slice(0, 4).map((a) => <ArticleCard key={a.handle} a={a} />)}</div>
      </section>
    </>
  )
}
