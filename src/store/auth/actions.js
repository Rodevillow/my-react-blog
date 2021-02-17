import axios from 'axios';


// CONSTANTS

export const AUTH_SET_TOKEN = 'AUTH_SET_TOKEN'
export const AUTH_SET_IS_FETCHING = 'AUTH_SET_IS_FETCHING'
export const AUTH_SET_IS_AUTH = 'AUTH_SET_IS_AUTH'
export const AUTH_SET_USER_DATA = 'AUTH_SET_USER_DATA'


// SYNC ACTIONS

export const setIsFetching = (isFerching) => ({
    type: AUTH_SET_IS_FETCHING,
    payload: isFerching
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


// ASYNC ACTIONS THUNK

export const asyncDoAuth = (email, password) => dispatch => {

    // Установить в store
    // isLoading: true
    dispatch(setIsFetching(true))

    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        email,
        password
    })
        .then(res => {
            // Установить в store
            // authToken: token
            dispatch(setAuthToken('sometokenhash'))
            // username & email
            dispatch(setUserData('USERNAME', 'user@email.com'))
            // isLoading: false
            dispatch(setIsFetching(false))
        })
        .catch(err => {
            console.log('OOPS!')
            console.log(err)
            console.log('WE GOT SOME ERROR')

            // dispatch EXAMPLE
            // dispatch(someAction(err.message))
        });

}