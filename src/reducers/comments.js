import * as Types from "../constants/ActionTypes";

const inititalState = [];

const comments = (state = inititalState, action) => {
    switch(action.type){
        case Types.GET_COMMENTS:
            state = action.comments;
            return [...state];
        case Types.ADD_COMMENTS:
            state.push(action.comment);
            return [...state];
        default: return [...state];
    }
};

export default comments;