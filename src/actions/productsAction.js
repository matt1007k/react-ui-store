import { GET_PRODUCTS } from './types';
import { settings } from '../config/settings'
import axios from 'axios'

export const getProducts = () => dispatch => {
    axios.get(`${settings.serverUrl}/api/v1/products`)
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        }).catch(errors => console.log(errors)
        )
}