import Service from "./service";

export const addToCounter = () => dispatch => { 
    dispatch({type: "ADD_COUNTER"});
}

export const removeFromCounter = () => dispatch => { 
    dispatch({type: "REMOVE_COUNTER"});
}




export const getAPokemon = () => dispatch => {
    randomNum = Math.floor(Math.random()* 150) + 1;
    Service.get(dispatch, `pokemon/${randomNum}`,{
        init: "GET_POKEMON",
        success: "GET_POKEMON_SUCCESS",
        error: "GET_POKEMON_FAILED"
    })
}