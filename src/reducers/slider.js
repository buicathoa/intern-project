import * as Types from './../constants/actionType';
var images = [
    {
        slider: {
            id: 0,
            image: 'https://marketplace.canva.com/EADakGvFucI/2/0/800w/canva-breathe-facebook-cover-Us8rhJAzWTU.jpg',
            selector: 0
        },
        index: 0
    },
    {
        slider: {
            id: 1,
            image: 'https://i0.wp.com/www.ultraupdates.com/wp-content/uploads/2016/11/dont-give-up-islamic-cover-photos.jpg?resize=708%2C262&ssl=1',
            selector: 1,
        },
        index: 1
    },
    {
        slider: {
            id: 2,
            image: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg',
            selector: 2
        },
        index: 2
    },
    {
        slider: {
            id: 3,
            image: 'https://ekapak.com/wpz/wp-content/uploads/2018/07/sunset-beach-birds.jpeg',
            selector: 3
        },
        index: 3
    },
    {
        slider: {
            id: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjCsOwiAvHbaYPZS_XIQF874mWh4FW_A39g&usqp=CAU',
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