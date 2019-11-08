import Service from "./service";

export const addToCounter = () => dispatch => { 
    dispatch({type: "ADD_COUNTER"});
}

export const removeFromCounter = () => dispatch => { 
    dispatch({type: "REMOVE_COUNTER"});
}



