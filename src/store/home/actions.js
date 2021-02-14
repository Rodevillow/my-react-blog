export const HOME_GET_POSTS = 'HOME_GET_POSTS';

export const homeGetPosts = (posts) => (
    {
        type: HOME_GET_POSTS,
        payload: posts
    }
)