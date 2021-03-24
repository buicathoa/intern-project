import * as Types from './../constants/actionType';
var initialState = [
    {
        id : 1,
        name: 'Iphone 4 like new 99%',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-nGMmHqrZthkugFyOPy4u57HGjXdxQl9rZ8iMtVs6VX-N1BmMWLzqDqB-Su1nt66J0jfwmGwT&usqp=CAc',
        description: 'Oldest Item in Apple',
        rating : 3,
        salePrice:300,
        oldPrice:600,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'iPhone 4 là một bước tiến mới của Apple trong công nghệ màn hình. ... Với kích cỡ màn hình 3,5inch, cùng độ phân giải 960 x 640, mật độ điểm ảnh lên tới 326 ppi, màn hình iPhone 4 cho hình ảnh hiển thị sắc nét và mịn màng đến mức người dùng sẽ không thể cảm nhận được sự hiện diện của các điểm ảnh trên màn hình.'
    },
    {
        id : 2,
        name: 'Iphone 5 like new 99%',
        image:'https://fptshop.com.vn/content/images/uploaded/phone%20img/apple/apple-iphone-5s-ofic1.jpg',
        description:'Product of Apple', 
        rating:4,
        salePrice:330,
        oldPrice:400,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'iPhone 5s 16GB được trang bị màn hình 4.0 inch với độ phân giải cao. Máy chạy ... 5S sở hữu camera 8 MP với đèn led flash kép. ...'
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
        name: 'Iphone 12 like new 99%',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVpMvxOYmLrHoXKfL3lSf5bEooC3PY5R5OfcCgE6k4eGuAUaJWpz4ZWXaKHW8Z8m9nMDiZI0D&usqp=CAc',
        description: 'Product of USA',
        rating:5,
        salePrice:1000,
        oldPrice:1102,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'Màn hình 6.1 inch, 1.170 x 2.532 pixels, tấm nền Super Retina XDR OLED. CPU: Apple A14 Bionic. RAM: 4 GB. Bộ nhớ trong: 128 GB'
    },
    {
        id : 8,
        name: 'Samsung s20 Ultra like new 99%',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxlgjqb67rqU-rJjOTyVBdvzfK0on1fV1Kxc9X_N0mM3k4asLpZSVjSCfzKxpGsFXMvj6eo0&usqp=CAc',
        description: 'Product of Korea',
        rating:5,
        salePrice:800,
        oldPrice:820,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'Galaxy S20+. Đen Vô Cực; Xám Vô Cực; Xanh Khí Chất. Galaxy S20 Ultra. Đen Vô Cực; Xám Vô Cực; Trắng Cloud White. XEM GALAXY S20 RẤT CHI TIẾT.'
    },
    {
        id : 9,
        name: 'Macbook pro 4 like new 99%',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVK0NiFeNNl8t1DmdFj3y9SSWFbGMtvbT4nOCJOCEyEvIYymHhScZtVFI7BNy1VMiZgYBAUat&usqp=CAc',
        description: 'Product of Apple',
        rating:5,
        salePrice:2000,
        oldPrice:2200,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'1'
    },
    {
        id : 10,
        name: 'Tablet 7 like new 99%',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXAe-r-ZhzUO8-Y00LYPjfBThurw7a0T8ajHviVfo-bIfAHhIsRPJgk02zC_KdfC9aT9OSbPQ&usqp=CAc',
        description: 'Product of Apple',
        rating:5,
        salePrice:600,
        oldPrice:619,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'Với MacBook Pro 13 inch 2020, Apple phát hành hai phiên bản khác nhau không chỉ về số lượng cổng Thunderbolt mà còn khác cả về dòng ...'
    },
    {
        id : 11,
        name: 'Nokia 5 like new 99%',
        image:'data:image/jpeg;base64,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',
        description: 'Product of Japan',
        rating:4,
        salePrice:30,
        oldPrice:35,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'Về cấu hình máy có màn hình 5.2 inch, RAM 2GB, bộ nhớ trong 16 GB, có thể mở rộng qua khe cắm thẻ nhớ microSD. Bên trong, Nokia 5 trang bị sẵn con chip Snapdragon 430 và cài Android 7.1.1 Nougat mới nhất. Nokia 5 được trang bị camera sau 13MP, camera trước 8MP góc rộng có thể chụp ảnh selfie rộng hơn.'
    },
    {
        id : 12,
        name: 'Oppo 3 like new 99%',
        image:'https://cf.shopee.vn/file/731f53a366e429318c9b95ad84664450',
        description: 'Product of China',
        rating:3,
        salePrice:33,
        oldPrice:35,
        moreInfo:'Miễn phí vận chuyển Miễn phí vận chuyển tới 20.000d',
        content:'Màn hình: 6.52", HD+Chip: MediaTek Helio P35 8 nhânRAM: 3 GB, Bộ nhớ trong: 32 GBCamera sau: Chính 13 ... Xem thêm cấu hình chi tiết.'
    }
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