import * as Types from './../constants/actionType';
var images = [
    {
        slider: {
            id: 0,
            image: 'https://stcv4.hnammobile.com/uploads/optimized/banner/thanh-toan-vnpay-br-giam-den-100k-1003516.jpg?v=1616384342',
            selector: 0
        },
        index: 0
    },
    {
        slider: {
            id: 1,
            image: 'https://stcv4.hnammobile.com/uploads/optimized/banner/ra-mat-samsung-a52-a72-1003541.webp?v=1616471822',
            selector: 1,
        },
        index: 1
    },
    {
        slider: {
            id: 2,
            image: 'https://stcv4.hnammobile.com/uploads/optimized/banner/hotsale-note-20-series-br-chi-tu-15-249-000d-1001764.jpg?v=1616385242',
            selector: 2
        },
        index: 2
    },
    {
        slider: {
            id: 3,
            image: 'https://stcv4.hnammobile.com/uploads/optimized/banner/oppo-reno5-br-chi-con-7-379-000d-1003571.jpg?v=1616385482',
            selector: 3
        },
        index: 3
    },
    {
        slider: {
            id: 4,
            image: 'https://stcv4.hnammobile.com/uploads/optimized/banner/s21-series-chinh-hang-br-hnam-giam-30-1001765.jpg?v=1616385603',
            selector: 4
        },
        index: 4
    }
];
const initialState = {
    slideImage: images,
    displayId: 0,
    displayButton: 0,
    slideButton: images
}
const sliders = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_IMAGES: {
            let { displayId } = state;
            if (displayId <= state.slideImage.length - 2) {
                displayId += 1;
            }
            else {
                displayId = 0
            }
            return { ...state, displayId }
        }
        case Types.BACK_IMAGES: {
            let { displayId } = state;
            if (displayId > 0) {
                displayId -= 1;
            } else {
                displayId = state.slideImage.length - 2;
            }
            return { ...state, displayId }
        }
        case Types.SELECTOR: {
            let { id } = action;
            return { ...state, displayId: id }
        }
        default: return {...state};
    }
}
export default sliders;