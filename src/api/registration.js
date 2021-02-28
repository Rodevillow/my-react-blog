import { post } from './index'

export const doRegistration = async (name, email, password, confirmPaword) => {
    return await post('auth/registration', { name, email, password, confirmPaword });
}