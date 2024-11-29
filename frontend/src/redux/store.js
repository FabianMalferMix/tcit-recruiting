import {createStore, combineReducers, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import postsReducer from "./reducers/postReducer";
import searchReducer from "./reducers/searchValueReducer";

const rootReducer = combineReducers({
    posts:postsReducer,
    searchValue:searchReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store 