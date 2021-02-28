import { doRegistration } from '../../api/registration'
import { AUTH_VALIDATION_ERROR_CODE } from '../../api/_constants.status.codes'


// CONSTANTS

export const REGISTRATION_SET_IS_FETCHING = 'REGISTRATION_SET_IS_FETCHING'
export const REGISTRATION_SET_ERRORS = 'REGISTRATION_SET_ERRORS'


// SYNC ACTIONS

export const setRegistrationIsFetching = (isFetching) => ({
    type: REGISTRATION_SET_IS_FETCHING,
    payload: isFetching
})

export const setRegistrationErrors = (errors) => ({
    type: REGISTRATION_SET_ERRORS,
    payload: errors
})


// ASYNC ACTIONS THUNK

export const asyncDoRegistration = (name, email, password, repeatPassword) => async (dispatch) => {

    dispatch(setRegistrationIsFetching(true))

    try {
        const response = await doRegistration(name, email, password, repeatPassword)

        console.log('SET REGISTRATION ERRORS');
        if (response.status === AUTH_VALIDATION_ERROR_CODE) {
            dispatch(setRegistrationErrors(response.data.errors))
        }

        dispatch(setRegistrationIsFetching(false))

    } catch (e) {
        console.log('Ой =( Что-то пошло не так. Ошбика регистрации... =(');
        console.log(e);

        dispatch(setRegistrationIsFetching(false))
    }
}