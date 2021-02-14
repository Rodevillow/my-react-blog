import { HOME_GET_POSTS } from './actions';

const defaultState = {
    posts: []
}

export const homeReducer = (state = defaultState, action) => {

    switch(action.type) {
        case HOME_GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }

}