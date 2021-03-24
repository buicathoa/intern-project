import * as Types from './../constants/actionType';
var images = [
    {
        slider: {
            id: 0,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQorlPvyjb1Y6M8rX-L0UKCy10Kf-b-xNrOYQ&usqp=CAU',
            selector: 0
        },
        index: 0
    },
    {
        slider: {
            id: 1,
            image: 'https://i.pinimg.com/originals/c5/32/68/c5326891ff40b9bea48820989b213d1b.jpg',
            selector: 1,
        },
        index: 1
    },
    {
        slider: {
            id: 2,
            image: 'https://i.pinimg.com/originals/dd/3b/31/dd3b316d542829af79aa3134ccae27a6.jpg',
            selector: 2
        },
        index: 2
    },
    {
        slider: {
            id: 3,
            image: 'https://i.pinimg.com/originals/2a/f6/05/2af605467639e7d4496f28d84fd68a49.jpg',
            selector: 3
        },
        index: 3
    },
    {
        slider: {
            id: 4,
            image: 'https://i.pinimg.com/originals/23/05/35/230535d2013c6b8f34e2304d050df22f.jpg',
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