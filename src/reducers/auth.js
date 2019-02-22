import { GET_AUTH, GET_USER, LOG_OUT, GET_ERRORS_LOGIN, GET_ERRORS_SIGN_UP } from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case GET_AUTH:
            return Object.assign({}, state,{token: action.payload.token});
        case GET_USER:
            return Object.assign({}, state,{
                name: action.payload.user.data.name,
                id: action.payload.user.data.id,
                email: action.payload.user.data.email,
                role: action.payload.user.data.role
            });
        case GET_ERRORS_LOGIN:
            return { errors_login: action.payload };
        case GET_ERRORS_SIGN_UP:
            return { errors_register: action.payload };
        case LOG_OUT:
            return {};
        default:
            return state;
    }
}
