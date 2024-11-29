import { CREATE_POST, DELETE_POST, FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from "../constants";

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

export const fetchPostsActionAS = () => async (dispatch) => {
    dispatch({type:FETCH_POSTS});
    try{
        const response = await fetch(process.env.REACT_APP_API_URL);
        console.log('API Response:', response);  // Ver la respuesta completa
        if (!response.ok) throw new Error("Error al obtener los posts");
        const data = await response.json();
        dispatch({ type: FETCH_POSTS_SUCCESS, payload: data });
    } catch (error) {
        console.error('Fetch error:', error);  // Log para ver detalles del error
        dispatch({ type: FETCH_POSTS_ERROR, payload: error.message });
    }
};