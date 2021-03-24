import * as Types from './../constants/actionType';

export const actChangeImages = () => ({
    type: Types.CHANGE_IMAGES
})
export const actBackImages = () => ({
    type: Types.BACK_IMAGES
})
export const actSelector = (id) => ({
    type: Types.SELECTOR,
    id
})
export const actNextSlide = () => ({
    type : Types.NEXT_DEALS
})
export const actBackSlide = () => ({
    type : Types.BACK_DEALS
})
export const actDetail = (id) => ({
    type : Types.DETAIL,
    id
})
export const actAddToCart = (product,quantity) => ({
    type : Types.ADD_TO_CART,
    product,
    quantity
})
export const actDelete = (product)=>({
    type : Types.DELETE_ITEM,
    product
})
export const actUpdate = (product,quantity) => ({
    type : Types.UPDATE_PRODUCT,
    product,
    quantity
})
export const actSearch = (keyword) => ({
    type : Types.SEARCH_ITEM,
    keyword
})