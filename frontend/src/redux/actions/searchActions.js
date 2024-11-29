import { SET_SEARCH_VALUE, RESET_SEARCH_VALUE } from "../constants";

export const setSearchAction = (value) => {
    return {
        type: SET_SEARCH_VALUE,
        payload: value
    }
};

export const resetSearchAction = () => {
    return {
        type: RESET_SEARCH_VALUE
    }
}