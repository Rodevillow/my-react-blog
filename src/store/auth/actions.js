import { doAuth } from '../../api/auth'
import { AUTH_VALIDATION_ERROR_CODE } from '../../api/_constants.status.codes'


// CONSTANTS

export const AUTH_SET_TOKEN = 'AUTH_SET_TOKEN'
export const AUTH_SET_IS_FETCHING = 'AUTH_SET_IS_FETCHING'
export const AUTH_SET_IS_AUTH = 'AUTH_SET_IS_AUTH'
export const AUTH_SET_USER_DATA = 'AUTH_SET_USER_DATA'
export const AUTH_SET_ERRORS = 'AUTH_SET_ERRORS'


// SYNC ACTIONS

export const setAuthIsFetching = (isFetching) => ({
    type: AUTH_SET_IS_FETCHING,
    payload: isFetching
})

export const setIsAuth = (isAuth) => ({
    type: AUTH_SET_IS_AUTH,
    payload: isAuth
})

export const setUserData = (username, email) => ({
    type: AUTH_SET_USER_DATA,
    payload: { username, email }
})

export const setAuthToken = (token) => ({
    type: AUTH_SET_TOKEN,
    payload: token
})

export const setAuthErrors = (errors) => ({
    type: AUTH_SET_ERRORS,
    payload: errors
})


// ASYNC ACTIONS THUNK

export const asyncDoAuth = (email, password) => async (dispatch) => {

    dispatch(setAuthIsFetching(true))

    try {
        const response = await doAuth(email, password)

        console.log('SET AUTH ERRORS');
        if (response.status === AUTH_VALIDATION_ERROR_CODE) {
            dispatch(setAuthErrors(response.data.errors))
        }

        // dispatch(setAuthToken('sometokenhash'))
        // dispatch(setUserData('USERNAME', 'user@email.com'))
        dispatch(setAuthIsFetching(false))

    } catch (e) {
        console.log('Ой =( Что-то пошло не так');
        console.log(e);

        dispatch(setAuthIsFetching(false))
    }
}