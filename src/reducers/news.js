import * as Types from "../constants/ActionTypes";

const inititalState = [];

const news = (state = inititalState, action) => {
    switch(action.type){
        case Types.GET_NEWS:
            state = action.news;
            return [...state];
        case Types.ADD_NEWS:
            state.unshift(action.new1);
            return [...state];            
        default: return [...state];
    }
};

export default news;