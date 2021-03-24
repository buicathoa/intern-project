import * as Types from './../constants/actionType'
var deals = [
    {
        id: 0,
        salePrice: 300,
        oldPrice: 600,
        image: 'https://pbs.twimg.com/profile_images/699564144337428481/SFU6uebL.jpg'
    },
    {
        id: 1,
        salePrice: 320,
        oldPrice: 640,
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Frank_Lampard_2017.jpg'
    },
    {
        id: 2,
        salePrice: 200,
        oldPrice: 100,
        image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p1718.png'
    },
    {
        id: 3,
        salePrice: 500,
        oldPrice: 620,
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Petr_%C4%8Cech_Chelsea_2013.jpg'
    },
    {
        id: 4,
        salePrice: 200,
        oldPrice: 300,
        image: 'https://i.guim.co.uk/img/media/32f0496452d5a235f5f200198a2b57a49ed020be/0_132_4549_2730/master/4549.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8433acb438dfd59cde294c6dda931073'
    },
    {
        id: 5,
        salePrice: 300,
        oldPrice: 600,
        image: 'https://resources.premierleague.com/premierleague/photo/2019/05/01/3aedde58-0df0-4723-81bb-3ae34d2b876f/azpilicueta.jpg'
    },
    {
        id: 6,
        salePrice: 320,
        oldPrice: 630,
        image: 'https://static.dw.com/image/4056537_4.jpg'
    },
    {
        id: 7,
        salePrice: 100,
        oldPrice: 550,
        image: 'https://i.guim.co.uk/img/media/c95dbaec970bd5af132f7432f5b71cc7fcc029f4/408_120_2682_1609/master/2682.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ef2d65b55dc47662e5cab07c9e1b8bdf'
    },
    {
        id: 8,
        salePrice: 300,
        oldPrice: 600,
        image: 'https://i.guim.co.uk/img/media/3033e6c46eaa3a28fb7b1d7bcf743925f3806eed/0_226_4039_2424/master/4039.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=06a84daff02bc83857ce6a9b2c617f4e'
    }
    ,
    {
        id: 9,
        salePrice: 1300,
        oldPrice: 1600,
        image: 'https://acefootball.com/wp-content/uploads/2020/09/GettyImages-1273763723.jpg'
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