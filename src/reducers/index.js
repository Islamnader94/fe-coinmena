import {combineReducers } from 'redux';
import products from './productReducer';

export default combineReducers({
    productsData: products,
});