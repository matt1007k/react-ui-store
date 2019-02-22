import { GET_ERRORS } from '../actions/types'

const initialState = {
    errors: {}
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_ERRORS:
            return { errors: payload };
        default:
            return state;
    }
}