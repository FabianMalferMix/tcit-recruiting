import { CREATE_POST, DELETE_POST, FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from "../constants"
// const initialState = {
//     posts:[
//         {id:1, name:"Post 1", description:"Description 1"},
//         {id:2, name:"Post 2", description:"Description 2"},
//         {id:3, name:"Post 3", description:"Description 3"},
//         {id:4, name:"Post 4", description:"Description 4"},
//         {id:5, name:"Post 5", description:"Description 5"},
//         {id:6, name:"Post 6", description:"Description 6"},
//         {id:7, name:"Post 7", description:"Description 7"},
//         {id:8, name:"Post 8", description:"Description 8"},
//         {id:9, name:"Post 9", description:"Description 9"},
//         {id:10, name:"Post 10", description:"Description 10"},
//         {id:11, name:"Post 11", description:"Description 11"},
//         {id:12, name:"Post 12", description:"Description 12"},
//         {id:13, name:"Post 13", description:"Description 13"},
//         {id:14, name:"Post 14", description:"Description 14"},
//         {id:15, name:"Post 15", description:"Description 15"},
//         {id:16, name:"Post 16", description:"Description 16"},
//         {id:17, name:"Post 17", description:"Description 17"},
//         {id:18, name:"Post 18", description:"Description 18"},
//         {id:19, name:"Post 19", description:"Description 19"},
//         {id:20, name:"Post 20", description:"Description 20"},
//         {id:21, name:"Post 21", description:"Description 21"},
//         {id:22, name:"Post 22", description:"Description 22"},
//         {id:23, name:"Post 23", description:"Description 23"},
//         {id:24, name:"Post 24", description:"Description 24"},
//         {id:25, name:"Post 25", description:"Description 25"},
//         {id:26, name:"Post 26", description:"Description 26"},
//         {id:27, name:"Post 27", description:"Description 27"},
//         {id:28, name:"Post 28", description:"Description 28"},
//         {id:29, name:"Post 29", description:"Description 29"},
//         {id:30, name:"Post 30", description:"Description 30"},
//     ]
// }

const initialState = {
    posts: [{id:30, name:"Post 30", description:"Description 30"}],
    loading: false,
    error: null,
};


const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                posts:[...state.posts, action.payload]
            };

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post)=>post.id !== action.payload.id)
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