import * as Types from '../constants/actionType'
var initialState = 
    {
        hour: 0,
        min: 300,
        seconds: 600,
    }
const countDown = (state = initialState, action) => {
    switch (action.type) {
        default: return [ ...state ];
    }
}
export default countDown;