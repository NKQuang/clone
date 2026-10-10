import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Collection from './pages/Collection.jsx'
import Product from './pages/Product.jsx'
import { About, Series, Blog, Article, Contact, Stores, Cart, Checkout, Auth, Search, StaticPage, NotFound } from './pages/Pages.jsx'
import { CartProvider, productMap, articleMap, collectionMap, pages, getCollectionProducts } from './store.jsx'

function Resolve() {
  const { handle } = useParams()
  if (productMap[handle]) return <Product key={handle} p={productMap[handle]} />
  if (articleMap[handle]) return <Article a={articleMap[handle]} />
  if (collectionMap[handle]) {
    const c = collectionMap[handle]
    return <Collection key={handle} title={c.name} items={getCollectionProducts(handle)} crumbs={[['Sản phẩm', '/collections/all'], [c.name]]} />
  }
  if (pages[handle]) return <StaticPage page={pages[handle]} />
  return <NotFound />
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="collections/all" element={<Collection showCats title="Tất cả sản phẩm" desc="Khám phá các dòng quạt điện cao cấp từ WOLF FAN – Thiết kế hiện đại, công nghệ tiên tiến, mang lại không gian mát lành cho mọi gia đình." items={getCollectionProducts('all')} />} />
            <Route path="collections/:handle" element={<Resolve />} />
            <Route path="gioi-thieu" element={<About />} />
            <Route path="bo-suu-tap" element={<Series />} />
            <Route path="tin-tuc" element={<Blog />} />
            <Route path="lien-he" element={<Contact />} />
            <Route path="he-thong-cua-hang" element={<Stores />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="account/login" element={<Auth mode="login" />} />
            <Route path="account/register" element={<Auth mode="register" />} />
            <Route path="search" element={<Search />} />
            <Route path=":handle" element={<Resolve />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
