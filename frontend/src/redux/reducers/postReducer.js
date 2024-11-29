import { CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_ERROR, DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_ERROR, FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from "../constants"


const initialState = {
    posts: [],
    loading: false,
    error: null,
};


const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                loading: true
            };

        case CREATE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: [...state.posts, action.payload],
            };

        case CREATE_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case DELETE_POST:
            return {
                ...state,
                loading:true
            };

        case DELETE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                // posts: state.posts.posts.filter((post) => post.id !== action.payload),
                posts: state.posts.filter((post) => post.id !== action.payload),
            };

        case DELETE_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case FETCH_POSTS:
            return { ...state, loading: true, error: null };

        case FETCH_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload };

        case FETCH_POSTS_ERROR:
            return { ...state, loading: false, error: action.payload };

        default:
            return state
    };
};

export default postsReducer