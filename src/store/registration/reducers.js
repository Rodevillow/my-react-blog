import { 
    REGISTRATION_SET_ERRORS,
    REGISTRATION_SET_IS_FETCHING
} from "./actions";

const defaultState = {
    isFetching: false,
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    errors: []
}

export const registrationReducer = (state = defaultState, action) => {

    switch (action.type) {
        case REGISTRATION_SET_ERRORS:
            return {
                ...state,
                email: action.payload
            }
        case REGISTRATION_SET_IS_FETCHING:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
}