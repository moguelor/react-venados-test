import { CALL_API } from 'redux-api-middleware';
import { API_URL } from "babel-plugin-dotenv";
import { FETCH_PRODUCT, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from '../actionTypes';
import cookie from 'react-cookies';

/** Obtiene datos de producto */
export default function fetchProduct(id) {
    return (dispatch) => {
        return dispatch({
            [CALL_API]: {
                endpoint: `${API_URL}/api/v1/coupon/${id}?affiliate_id=${cookie.load('SwMybusiness.user.token').affiliate_id}`,
                headers: { 'Authorization': `Bearer ${cookie.load('SwMybusiness.user.token').access_token}` },
                method: 'GET',
                types: [
                    FETCH_PRODUCT,
                    FETCH_PRODUCT_SUCCESS,
                    FETCH_PRODUCT_FAILURE
                ]
            }
        });
    };
}