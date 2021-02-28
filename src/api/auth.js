import { post } from './index'

export const doAuth = async (email, password) => {
    return await post('auth/login', { email, password });
}