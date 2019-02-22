import { GET_AUTH, GET_USER, LOG_OUT, GET_ERRORS_LOGIN, GET_ERRORS_SIGN_UP } from './types'
import {settings} from '../config/settings'

import axios from 'axios'

export const login = credencial => dispatch => {
    axios.post(`${settings.serverUrl}/auth/sign_in`, credencial)
    .then(response => {        
        const token = {
            'access-token': response.headers['access-token'],
            client : response.headers['client'],
            uid: response.headers['uid']
        }
        dispatch({type: GET_AUTH, payload: { token: JSON.stringify(token) } })
        dispatch({type: GET_USER, payload: { user: response.data } })
    })
    .catch(error => {
        console.log(error.response.data.errors);
        
        dispatch({
            type: GET_ERRORS_LOGIN,
            payload: error.response.data
        })
    })
}


export const register = credencial => dispatch => {
    axios.post(`${settings.serverUrl}/auth`, credencial)
    .then(response => {
        const token = {
            'access-token': response.headers['access-token'],
            client : response.headers['client'],
            uid: response.headers['uid']
        }
        dispatch({type: GET_AUTH, payload: { token: JSON.stringify(token) } })
        dispatch({type: GET_USER, payload: { user: response.data } })
    })
    .catch(error => {
        dispatch({
            type: GET_ERRORS_SIGN_UP,
            payload: error.response.data
        })
    })
}

export const logOut = () => dispatch => {
    dispatch({type: LOG_OUT })
}