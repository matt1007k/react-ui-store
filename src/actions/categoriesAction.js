import { GET_CATEGORIES } from './types'
import axios from 'axios'

import { settings } from '../config/settings'

export const getCategories = () => dispatch => {
    axios.get(`${settings.serverUrl}/api/v1/categories`)
        .then(res => {
            dispatch({
                type: GET_CATEGORIES,
                payload: res.data
            })
        })
}