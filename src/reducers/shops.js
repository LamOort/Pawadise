import * as Types from "../constants/ActionTypes";

const inititalState = [];

const shops = (state = inititalState, action) => {
    switch(action.type){
        case Types.GET_SHOPS:
            state = action.shops;
            return [...state];
        default: return [...state];
    }
};

export default shops;