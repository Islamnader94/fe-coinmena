import {
    EDIT_PRODUCT_ERROR,
    EDIT_PRODUCT_LOADING,
    EDIT_PRODUCT_SUCCESS,
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_LOADING,
    FETCH_PRODUCT_SUCCESS,
} from '../actions/types';

const defaultState = {
    products: [],
    error: null,
    isLoading: false,
}

const prodcutReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_PRODUCT_SUCCESS:
            return {...state, products: action.payload };
        default:
            return state;
    }
}

export default prodcutReducer;