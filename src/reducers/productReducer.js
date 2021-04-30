import {
    EDIT_PRODUCT_SUCCESS,
    FETCH_PRODUCT_SUCCESS,
} from '../actions/types';

const defaultState = {
    products: []
}

const prodcutReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_PRODUCT_SUCCESS:
            return {...state, products: action.payload };
        case EDIT_PRODUCT_SUCCESS:
            const updatedProducts = state.products.filter(product => product._id !== action.payload._id)
            sessionStorage.setItem('products', JSON.stringify([...updatedProducts, action.payload]));
            return {...state, products: [...updatedProducts, action.payload]};
        default:
            return state;
    }
}

export default prodcutReducer;