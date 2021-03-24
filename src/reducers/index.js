import {combineReducers} from 'redux';
import products from './products';
import DealsocItem from './DealsocItem';
import sliders from './slider';
import Dealsoc from './DealsocItem';
import feedback from './feedback.js';
import Carts from './cart';
const appReducers = combineReducers({
    products,
    DealsocItem,
    sliders,
    Dealsoc,
    feedback,
    Carts,
});
export default appReducers;