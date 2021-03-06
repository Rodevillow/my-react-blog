import {
    AUTH_SET_TOKEN,
    AUTH_SET_IS_AUTH,
    AUTH_SET_USER_DATA,
    AUTH_SET_IS_FETCHING,
    AUTH_SET_ERRORS
} from "./actions";

const defaultState = {
    isFetching: false,
    isAuth: false,
    username: '',
    email: '',
    authToken: null,
    errors: []
}

export const authReducer = (state = defaultState, action) => {

    switch (action.type) {
        case AUTH_SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case AUTH_SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case AUTH_SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case AUTH_SET_TOKEN:
            return {
                ...state,
                authToken: action.payload
            }
        case AUTH_SET_ERRORS:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;
    }
}