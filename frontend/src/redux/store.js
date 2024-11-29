import {createStore, combineReducers} from "redux";
import postsReducer from "./reducers/postReducer";
import searchReducer from "./reducers/searchValueReducer";

const rootReducer = combineReducers({
    posts:postsReducer,
    searchValue:searchReducer
});

const store = createStore(rootReducer);

export default store 