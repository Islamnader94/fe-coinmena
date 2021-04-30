import {
    EDIT_PRODUCT_SUCCESS,
    FETCH_PRODUCT_SUCCESS,
} from './types';

import products from '../data/productData.json';
import {history} from '../components/RouterComponent';

export const fetchProductsSuccess = (data) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: data
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsSuccess(products))
    }
}

export const EditProductSuccess = (data) =>  {
    return {
        type: EDIT_PRODUCT_SUCCESS,
        payload: data,
    }
}

export const editProduct = (product) => {
    const data = {
        _id: product._id,
        product_name: product.product_name,
        weight: product.weight,
        availability: product.availability,
        price_range: product.price_range,
        price_tier: product.price_tier,
        unit_cost: product.unit_cost,
        url: product.url
    }

    return (dispatch) => {
        dispatch(EditProductSuccess(data))
        history.push({pathname: '/'});
    }
}