const features = [
  { title: 'Nhanh chóng', desc: 'Xây dựng với React + Vite, tải lại tức thì khi phát triển.' },
  { title: 'Đơn giản', desc: 'Cấu trúc gọn gàng, dễ mở rộng thêm trang và thành phần.' },
  { title: 'Sẵn sàng', desc: 'Chạy trong Docker, sẵn sàng cho phiên Alloy.' },
]

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <nav style={{ maxWidth: 1100, margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <strong style={{ fontSize: 20, color: '#2563eb' }}>Clone</strong>
          <div style={{ display: 'flex', gap: 24, fontSize: 15, color: '#475569' }}>
            <a href="#">Trang chủ</a>
            <a href="#features">Tính năng</a>
            <a href="#contact">Liên hệ</a>
          </div>
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '96px 24px 64px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 48, lineHeight: 1.15, marginBottom: 16 }}>Chào mừng đến với Clone</h1>
          <p style={{ fontSize: 18, color: '#475569', maxWidth: 600, margin: '0 auto 32px' }}>
            Giao diện frontend khởi đầu cho dự án của bạn. Hãy chỉnh sửa <code>src/App.jsx</code> để bắt đầu.
          </p>
          <a className="btn" href="#features" style={{ display: 'inline-block', background: '#2563eb', color: '#fff', padding: '12px 28px', borderRadius: 8, fontWeight: 600 }}>
            Bắt đầu
          </a>
        </section>

        <section id="features" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 96px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {features.map((f) => (
            <div key={f.title} className="card" style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ color: '#475569', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </section>
      </main>

      <footer id="contact" style={{ borderTop: '1px solid #e2e8f0', background: '#fff', padding: 24, textAlign: 'center', color: '#64748b', fontSize: 14 }}>
        © {new Date().getFullYear()} Clone. Mọi quyền được bảo lưu.
      </footer>
    </div>
  )
}
