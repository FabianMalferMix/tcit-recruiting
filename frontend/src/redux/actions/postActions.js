import { CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_ERROR, DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_ERROR, FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from "../constants";

export const  createPostAction = (post) => {
    return {
        type: CREATE_POST,
        payload: post
    }
};

export const createPostActionAS = (post) => async (dispatch) => {
    dispatch(createPostAction(post));
    try{
        const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        });
          
        if (!response.ok) {
            throw new Error('Error al crear el post');
        }
      
        const createdPost = await response.json(); 
      
        dispatch({
            type: CREATE_POST_SUCCESS,
            payload: createdPost,
        });
    } catch(error){
        dispatch({
            type: CREATE_POST_ERROR,
            payload: error.message,
        });
    }
};

export const  deletePostAction = (post) => {
    return {
        type: DELETE_POST,
        payload: post
    }
};

export const deletePostActionAS = (post) => async(dispatch) => {
    dispatch(deletePostAction(post));

    try{
        const response = await fetch(`${process.env.REACT_APP_API_URL}/${post.id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el post');
        }

        dispatch({
            type: DELETE_POST_SUCCESS,
            payload: post.id,
        });

    } catch(error){
        dispatch({
            type: DELETE_POST_ERROR,
            payload: error.message,
        });
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
        console.log('API Response:', response); 
        if (!response.ok) throw new Error("Error al obtener los posts");
        const data = await response.json();
        dispatch({ type: FETCH_POSTS_SUCCESS, payload: data });
    } catch (error) {
        console.error('Fetch error:', error); 
        dispatch({ type: FETCH_POSTS_ERROR, payload: error.message });
    }
};