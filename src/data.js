const C = 'https://bizweb.dktcdn.net/100/697/772'
const P = 'https://bizweb.dktcdn.net/thumb/large/100/697/772/products/'

export const IMG = {
  topBanner: `${C}/files/banner-top.jpg`,
  logo: `${C}/themes/1151009/assets/logo.png`,
  footerLogo: `${C}/themes/1151009/assets/footer-logo.png`,
  slides: [`${C}/themes/1151009/assets/slider_1.jpg`, `${C}/themes/1151009/assets/slider_2.jpg`],
  ceiling: `${C}/files/quat-tran-product_1_.jpg`,
  standing: `${C}/files/quat-cay-block.jpg`,
  living: `${C}/files/khong-gian-song.jpg`,
}

export const slides = [
  { tag: 'Bộ sưu tập mới', t1: 'Không gian sống', t2: 'Tiện nghi & Hiện đại', desc: 'Khám phá bộ sưu tập sản phẩm mới nhất với thiết kế tinh tế, hiệu năng vượt trội và mang lại luồng gió tự nhiên cho ngôi nhà bạn.', cta: 'Khám phá ngay' },
  { tag: 'Khuyến mãi hè', t1: 'Mát lạnh sảng khoái', t2: 'Giảm đến 30%', desc: 'Tận hưởng không gian mát mẻ với các dòng quạt trần cao cấp. Vận hành êm ái, bảo hành động cơ trọn đời.', cta: 'Săn ưu đãi' },
]

export const nav = ['Trang chủ', 'Giới thiệu', 'Sản phẩm', 'Bộ sưu tập', 'Khuyến mãi', 'Tin tức', 'Liên hệ', 'Hệ thống cửa hàng', 'Chính sách cửa hàng', 'Tuyển dụng']

const p = (name, img, price, old, opt) => ({ name, img: P + img, price, old, opt })
export const flash = [
  p('Quạt đối lưu Toshiba F-DSC50XVN(W) - 24W', 'quat-doi-luu-toshiba-f-dsc50xvn-w-20w-562a223c-5d33-486a-8e9b-b3e9282a4777.jpg', 2300000, 2890000),
  p('Quạt đứng Hitachi LF-D6RCWM / LF-D6RCGM (Trắng/Xám) -24W - motor DC', 'quat-dung-hitachi-lf-d6rcwm-lf-d6rcgm-trang-xam-24w.jpg', 2050000, 2690000, true),
  p('Quạt đứng Toshiba F-LSD10(H)VN / F-LSD10(W)VN- Remote (Xám trắng/Trắng)', 'quat-dung-toshiba-f-lsd10-w-vn-remote.jpg', 1800000, 2010000),
  p('Quạt đứng Dasin KSM-1845 - 71W', 'quat-dung-dasin-ksm-1845.jpg', 1690000, 1929000),
  p('Quạt đứng Hitachi LF-A6RCWN / LF-A6RCGN (Trắng/Xám) - 55W - Remote', 'quat-dung-hitachi-co-dong-co-ac-lf-a6rcwm-lf-a6rcgm-trang-xam-55w.jpg', 1590000, 1890000, true),
]
export const ceiling = [
  p('Quạt trần Nanoco NCF5462-GL 6 cánh màu vàng', 'quat-tran-nanoco-ncf5462-gl-6-canh-mau-vang.jpg', 2480000, 3100000),
  p('Quạt trần Nanoco NCF5653-WL 5 cánh', 'quat-tran-nanoco-ncf5653-wl-5-canh.jpg', 3080000, 3850000),
  p('Quạt trần Nanoco NCF5631-K 3 cánh', 'quat-tran-nanoco-ncf5631-k-3-canh.jpg', 1176000, 1470000),
  p('Quạt trần Nanoco NCF5631-W 3 cánh', 'quat-tran-nanoco-ncf5631-w-3-canh.jpg', 1176000, 1470000),
  p('Quạt trần Nanoco NCF5631-GOS 3 cánh', 'quat-tran-nanoco-ncf5631-gos-3-canh.jpg', 1176000, 1470000),
  p('Quạt trần Nanoco NCF5462-PL 6 cánh màu vân gỗ', 'quat-tran-nanoco-ncf5462-pl-6-canh-mau-van-go.jpg', 2480000, 3100000),
]
export const standing = [
  p('Quạt đứng Chinghai HS916A- có điều khiển', 'quat-dung-chinghai-hs916a-co-dieu-khien.jpg', 1222000, 1500000),
  p('Quạt đứng Toshiba F-LSA20(H)VN / F-LSA20(W)VN - Remote', 'quat-dung-toshiba-f-lsa20-h-vn-remote.jpg', 1150000, 1450000, true),
  p('Quạt đứng lốc xoáy Toshiba F-ASB50VN(W) 55w - Bạc đạn', 'quat-dung-loc-xoay-toshiba-f-asb50vn-w-55w-bac-dan.jpg', 1100000, 1390000),
  p('Quạt đứng Dasin KSM-1845 - 71W', 'quat-dung-dasin-ksm-1845.jpg', 1690000, 1929000),
]

const cat = (name, img, count) => ({ name, img: `${C}/collections/${img}`, count })
export const categories = [
  cat('Quạt cây', 'quat-cay.jpg', 12), cat('Quạt đứng', 'quat-dung.jpg', 0), cat('Quạt trần', 'cate-quat-tran.jpg', 19),
  cat('Quạt treo tường', 'cate-quat-treo-tuong.jpg', 0), cat('Quạt để bàn / Quạt hộp', 'cate-quat-ban.jpg', 0),
  cat('Quạt hơi nước / Quạt điều hòa', 'cate-quat-hoi-nuoc.jpg', 0), cat('Quạt tích điện', 'qua-t-ti-ch-die-n.jpg', 0),
  cat('Quạt thông gió / Hút mùi', 'qua-t-tho-ng-gio.jpg', 0), cat('Quạt công nghiệp', 'qua-t-co-ng-nghie-p.jpg', 0),
]

export const collections = [
  { name: 'Phòng Khách', img: `${C}/files/quat-phong-khach.jpg` },
  { name: 'Phòng Ngủ', img: `${C}/files/quat-phong-ngu.jpg` },
  { name: 'Công Nghiệp', img: `${C}/files/quat-cong-nghiep.jpg` },
]
