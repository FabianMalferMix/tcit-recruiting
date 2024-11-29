import {createStore} from "redux";
import postsReducer from "./reducers/postReducer";

const store = createStore(postsReducer);
export default store 