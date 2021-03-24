import * as Types from './../constants/actionType'
var deals = [
    {
        name:'samsung galaxy s21',
        id: 0,
        salePrice: 300,
        oldPrice: 600,
        image:'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1_2.jpg',
    },
    {
        name:'Oppo Reno 4',
        id: 1,
        salePrice: 320,
        oldPrice: 640,
        image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSZrrw3bnubj2CKCGdckfx40jM0xN0crFfwUVmHdpe-hCBRKS9SXlev4Df3U3FCSpukCy_sIGREncFnn34Cr8r6ZAjeM6VDHCPr&usqp=CAc',
    },
    {
        name:'Real Me C3',
        id: 2,
        salePrice: 200,
        oldPrice: 100,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dez7xGX_DuoSgoisydsdjm7-8xOBNlTcY-RrisNsxfWfF3-_mwERHv3pg_0&usqp=CAc',
    },
    {
        name:'Apple iphone 12',
        id: 3,
        salePrice: 500,
        oldPrice: 620,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQySU0jOIwoPCg_en0qbUaa-TjeXnEkO_00pcZcI93cXaA_uhHszO7MYF0w&usqp=CAc',
    },
    {
        name:'Iphone 7',
        id: 4,
        salePrice: 200,
        oldPrice: 300,
        image:'https://stcv4.hnammobile.com/uploads/products/colors/3/apple-iphone-7-plus-32gb--8896153998-jpg.jpg',
    },
    {
        name:'Apple ipad air 4',
        id: 5,
        salePrice: 300,
        oldPrice: 600,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETwCALs3qIBk5nScyDRQCyx0dblbL10DOtb9xQcGW_hFrmKxXg0sbqIcCGw&usqp=CAc',
    },
    {
        name:'Airpod',
        id: 6,
        salePrice: 320,
        oldPrice: 630,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYmLX06VE3HXM-KaSX8VjSymZQqhzeR4JXX0X3pXosfkgVOv3ssvO32kyF0C0AbxxdDrVBJ4M&usqp=CAc',
    },
    {
        name:'Bàn phím magic keyboard',
        id: 7,
        salePrice: 100,
        oldPrice: 550,
        image:'https://www.duchuymobile.com/images/thumbnails/180/180/detailed/40/trang.jpg',
    },
    {
        name:'Apple iphone 8',
        id: 8,
        salePrice: 300,
        oldPrice: 600,
        image:'https://stcv4.hnammobile.com/uploads/products/colors/3/apple-iphone-8-plus-128gb-01572325075.jpg',
    }
    ,
    {
        name:'Black berry 3',
        id: 9,
        salePrice: 1300,
        oldPrice: 1600,
        image:'https://sudospaces.com/thegioiblackberry-com-vn/2019/07/blackberry-key-3-1.jpg',
    }
];
const initialState = {
    startSlide: 0,
    slideDeals: deals,
    endSlide: 5
}
const Dealsoc = (state = initialState, action) => {
    switch (action.type) {
        case Types.NEXT_DEALS: {
            let { startSlide,endSlide } = state;
            if (startSlide < state.slideDeals.length -6  ) {
                startSlide += 1
                endSlide += 1
            } else {
                startSlide = 0
                endSlide = 5
            }
            return { ...state, startSlide, endSlide }
        }
        case Types.BACK_DEALS:{
            let { startSlide, endSlide} = state;
            if( startSlide > 0){
                startSlide -= 1
                endSlide -= 1
            }else{
                startSlide = 0
                endSlide = 5
            }
            return { ... state,startSlide, endSlide}
        }
        default: return { ...state };
    }
}
export default Dealsoc;