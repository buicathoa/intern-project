import * as Types from '../constants/actionType';
var images = [
    {
        id: 0,
        title: 'Item detail',
    },
    {
        id: 1,
        title: "what's on your mind ?!",
    },
];
const initialState = {
    feedbacks: images,
    displayId: 0,
}
const feedback = (state = initialState, action) => {
    switch (action.type) {
        case Types.DETAIL: {
            let { id } = action;
            return { ...state, displayId: id }
        }
        default: return { ...state };
    }
}
export default feedback;