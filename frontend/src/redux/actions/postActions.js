import { CREATE_POST, DELETE_POST, FETCH_POSTS } from "../constants";

export const  createPostAction = (post) => {
    return {
        type: CREATE_POST,
        payload: post
    }
};

export const  deletePostAction = (post) => {
    return {
        type: DELETE_POST,
        payload: post
    }
};

export const  fetchPostsAction = () => {
    return {
        type: FETCH_POSTS
    }
};