import * as Types from './../constants/actionType';
var initialState = [
    {
        id : 1,
        name: 'Samsung Galaxy s21 Ultra',
        image:'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1_2.jpg',
        description: 'Product of Korea',
        rating:4,
        salePrice:33,
        oldPrice:35,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'[HOT] Dùng thử S21 series - 14 ngày miễn phí đổi trả Thu cũ đổi mới lên đời S21 - Trợ giá tới 5 triệu đồng (có điều kiện kèm theo).'
    },
    {
        id : 2,
        name: 'Oppo Reno 4',
        image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSZrrw3bnubj2CKCGdckfx40jM0xN0crFfwUVmHdpe-hCBRKS9SXlev4Df3U3FCSpukCy_sIGREncFnn34Cr8r6ZAjeM6VDHCPr&usqp=CAc',
        description: 'Product of China',
        rating:3,
        salePrice:33,
        oldPrice:35,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'Thiết kế mới, hiện đại và ấn tượng. Đầu tiên, OPPO Reno 4 có sự nâng cấp toàn diện so với người anh em Reno3, khi sử dụng chất liệu nhôm nguyên khối '
    },
    {
        id : 3,
        name: 'Samsung galaxy s3 like new 99%',
        image:'https://cdn.tgdd.vn/Products/Images/42/55872/Samsung-Galaxy-S3-I9300-l.jpg',
        description: 'Product of Korea',
        rating:3,
        salePrice:400,
        oldPrice:440,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'Màn hình 4.8 inch độ phân giải HD 1280x720 cùng công nghệ Super AMOLED, cho chất lượng hình ảnh và màu sắc sống động. Cấu hình mạnh mẽSamsung Galaxy S3 được trang bị bộ vi xử lý lõi tứ xung nhịp 1.4GHz mang đến khả năng xử lý vượt trội hơn hẳn các thiết bị ra mắt cùng thời điểm.'
    },
    {
        id : 4,
        name: 'Oppo Neo 3 like new 99%',
        image:'https://fptshop.com.vn/Uploads/images/oppo-neo3-1.png',
        description: 'Product of China',
        rating:3,
        salePrice:100,
        oldPrice:120,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content: 'Thân máy có trọng lượng 130g, mỏng chỉ 9.2mm, là một smartphone nhỏ gọn và có thể dễ dàng sử dụng bằng một tay. OPPO Neo 3 R831K được trang bị màn hình 4.5inch với độ phân giải480x854 px, hình ảnh dễ nhìn, màu sắc nổi bật, tấm nền IPS giúp máy hiển thị màu sắc đẹp, rõ nét ở điều kiện ánh sáng ngoài trời.'

    },
    {
        id : 5,
        name: 'Real Me C3 like new 99%',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dez7xGX_DuoSgoisydsdjm7-8xOBNlTcY-RrisNsxfWfF3-_mwERHv3pg_0&usqp=CAc',
        description: 'Product of China',
        rating:2,
        salePrice:150,
        oldPrice:170,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content: 'Realme C3 được trang bị con chip mới nhất của MediaTek, mang tên Helio G70 với xung nhịp cao nhất đạt 2.0 GHz đi kèm với dung lượng RAM 3 GB. Hiệu năng của máy đáp ứng tốt nhu cầu làm việc hay giải trí hằng ngày như đọc báo, xem phim, lướt web,... một cách mượt mà, ổn định.'

    },
    {
        id : 6,
        name: 'Black berry 3 like new 99%',
        image:'https://sudospaces.com/thegioiblackberry-com-vn/2019/07/blackberry-key-3-1.jpg',
        description: 'Product of UK',
        rating:3,
        salePrice:500,
        oldPrice:529,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content: '3 GB. Bộ nhớ trong: 32 GB. Thẻ nhớ: MicroSD, hỗ trợ tối đa 256 GB. Thẻ SIM: 1 Nano SIM ... Đánh giá chi tiết BlackBerry KEYone: Rất chất nhưng khó gần '
    },
    {
        id : 7,
        name: 'Apple iPhone 12 Mini 64GB VN/A',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQySU0jOIwoPCg_en0qbUaa-TjeXnEkO_00pcZcI93cXaA_uhHszO7MYF0w&usqp=CAc',
        description: 'Product of US',
        rating:4,
        salePrice:33,
        oldPrice:35,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'Trong tất cả các dòng iPhone 12 Series ra mắt thì iPhone 12 Mini là chiếc có giá thấp nhất cũng là chiếc iPhone nhỏ nhất. Vậy chiếc iPhone 12 Mini có gì nổi bật so với những phiên bản khác.'
    },
    {
        id : 8,
        name: 'Iphone 7',
        image:'https://stcv4.hnammobile.com/uploads/products/colors/3/apple-iphone-7-plus-32gb--8896153998-jpg.jpg',
        description: 'Product of US',
        rating:5,
        salePrice:33,
        oldPrice:35,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'​iPhone 7 Plus là 1 phiên bản được đánh giá có sự thay đổi lớn nhất của Apple về camera, lần này Apple đã mang đến cho người dùng 1 sự trải nghiệm tính năng chụp ảnh không thua kém các máy chụp ảnh chuyên nghiệp. Hiện tại đang có 4 màu cho phiên bản 32Gb gồm: Silver, Gold,Rose Gold, Matte Black'
    },
    {
        id : 9,
        name: 'Apple iPhone 8 Plus 128Gb',
        image:'https://stcv4.hnammobile.com/uploads/products/colors/3/apple-iphone-8-plus-128gb-01572325075.jpg',
        description: 'Product of US',
        rating:3,
        salePrice:400,
        oldPrice:440,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'iPhone 8 và iPhone 8 Plus là bộ đôi được Apple ra mắt vào tháng 9 vừa qua với thiết kế không có nhiều thay đổi so với thế hệ trước. Tuy nhiên vẫn có nhiều điểm và tính năng được nâng cấp trên 2 thiết bị này.'
    },
    {
        id : 10,
        name: 'Apple iPad Pro 12.9 Cellular 256 GB 2020',
        image:'https://stcv4.hnammobile.com/uploads/products/colors/4/apple-ipad-pro-12-9-cellular-256-gb-2020-01592964456.jpg',
        description: 'Product of US',
        rating:5,
        salePrice:1500,
        oldPrice:1700,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content: 'Apple vừa mới nâng cấp chiếc iPad Pro 2020 với những cải tiến vượt bậc cùng với đó là phụ kiện bàn phím Magic Keyboard mới giúp cho chiếc iPad giờ đây đã có thể thay thế công việc của một chiếc laptop cồng kềnh.'

    },
    {
        id : 11,
        name: 'Apple iPad Air 4 10.9 Cellular 64GB 2020',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETwCALs3qIBk5nScyDRQCyx0dblbL10DOtb9xQcGW_hFrmKxXg0sbqIcCGw&usqp=CAc',
        description: 'Product of US',
        rating:2,
        salePrice:1200,
        oldPrice:1300,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content: 'Apple A14 Bionic 6 nhân, Đang cập nhật'

    },
    {
        id : 12,
        name: 'MacBook Air 13 inch Late 2020 512GB',
        image:'https://stcv4.hnammobile.com/uploads/products/colors/4/macbook-air-13-inch-late-2020-512gb-gold-mgne3-chip-m1-01614940324.jpg',
        description: 'Product of UK',
        rating:5,
        salePrice:1500,
        oldPrice:1900,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content: 'MacBook Air 13 2020 vẫn sở hữu thiết kế siêu mỏng và cao cấp như thế hệ tiền nhiệm với chất liệu hợp kim nhôm chắc chắn và cực kì bền bỉ. Máy có kích thước khá nhỏ gọn 30,41x 21,24x 1,61 cm và trọng lượng nặng chỉ 1.29 kg cực kì nhẹ. Bạn có thể dễ dàng mang theo chiếc MacBook Air 2020 bất kỳ đâu và mọi lúc cần. '
    },
    {
        id : 13,
        name: 'Tai nghe Apple AirPods Pro Chính Hãng',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYmLX06VE3HXM-KaSX8VjSymZQqhzeR4JXX0X3pXosfkgVOv3ssvO32kyF0C0AbxxdDrVBJ4M&usqp=CAc',
        description: 'Product of UK',
        rating:3,
        salePrice:500,
        oldPrice:529,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content: 'AirPods Pro là sản phẩm được nâng cấp đáng kể so với các sản phẩm tiền nhiệm, đặc biệt là khả năng chống ồn hiệu quả đang được nhiều người dùng thích thú.'
    },
    {
        id : 14,
        name: 'Apple Watch Series 6 40mm (GPS + 4G) Viền Nhôm',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvo-he9lijDhKnex9awRrNZ_Z-qDWGJAf4ZiG7SSk5PnSzb21a947m78k0In4m0b1jAqzldiI&usqp=CAc',
        description: 'Product of US',
        rating:4,
        salePrice:33,
        oldPrice:35,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'Đánh giá Apple Watch Series 6 40mm (GPS + 4G) Viền Nhôm Dây Cao Su Chính Hãng VN/A'
    
    },
    {
        id : 15,
        name: 'Bàn Phím Magic Keyboard Cho iPad Pro ',
        image:'https://www.duchuymobile.com/images/thumbnails/180/180/detailed/40/trang.jpg',
        description: 'Product of US',
        rating:5,
        salePrice:33,
        oldPrice:35,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'Đánh giá Bàn Phím Magic Keyboard Cho iPad Pro 11 inch (Gen 2) - International English'
    },
    {
        id : 16,
        name: 'Smart Keyboard Folio iPad',
        image:'https://www.duchuymobile.com/images/thumbnails/480/480/detailed/32/den.jpg',
        description: 'Product of US',
        rating:3,
        salePrice:400,
        oldPrice:440,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'Đánh giá Smart Keyboard Folio iPad'
    },
    {
        id : 17,
        name: 'Tai nghe AirPods Max Chính Hãng',
        image:'https://www.duchuymobile.com/images/thumbnails/480/480/detailed/38/hong.jpg',
        description: 'Product of US',
        rating:5,
        salePrice:1500,
        oldPrice:1700,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content: 'Đánh giá Tai nghe AirPods Max Chính Hãng Apple'

    },
    {
        id : 18,
        name: 'Apple Watch SE 44mm (4G) Viền Nhôm',
        image:'https://www.duchuymobile.com/images/thumbnails/480/480/variant_image/39/do_ivyq-j4.jpg',
        description: 'Product of US',
        rating:2,
        salePrice:1200,
        oldPrice:1300,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content: 'Đánh giá Apple Watch SE 44mm (4G) Viền Nhôm - Dây Vải Chính Hãng VN/A'
    },
];
const products = (state = initialState , action)=>{
    switch(action.type){
        case Types.SEARCH_ITEM: {
            console.log(action.keyword)
            let { keyword } = action;
            if(keyword){
                state = state.filter((product)=>{
                    return product.name.toLowerCase().indexOf(keyword) !== -1
                })
            }
            else{
                return [...state = initialState]
            }
        }
        default : return [...state];
    }
}
export default products;