import { SET_SEARCH_VALUE, RESET_SEARCH_VALUE } from "../constants";

const initialValue = "";

const searchReducer = (state = initialValue, action) => {
    switch (action.type){
        case SET_SEARCH_VALUE:{
            return action.payload
        }

        case RESET_SEARCH_VALUE: {
            return ""
        }

        default:
            return state
    }
};

export default searchReducer