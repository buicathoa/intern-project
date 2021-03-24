import * as Types from './../constants/actionType';
var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : [];
const Carts = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case Types.ADD_TO_CART: 
            var index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case Types.DELETE_ITEM: 
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1)
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case Types.UPDATE_PRODUCT:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity
            }
            if(quantity <= 0){
                state.splice(index, 1)
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default: return [...state];
    }
}
var findProductInCart = (state, product) => {
    var index = -1;
    for (var i = 0; i < state.length; i++) {
        if (state[i].product.id === product.id) {
            index = i;
            break;
        }
    }
    return index;
}

export default Carts;