const initialState = {
    counter:0,
    pokmeon: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COUNTER":{
            return {
                ...state,
                counter: state.counter +1
            }
        };
        case "REMOVE_COUNTER": {
            return {
                ...state,
                counter: state.counter -1
            }
        };
        case "GET_POKEMON": {
            return{
                ...state,
                gettingPokemon: true
            }
        };
        case "GET_POKEMON_SUCCESS": {
            return{
                ...state,
                pokemon: action.data
            }
        };
        case "GET_POKEMON_FAILED":{
            return{
                ...state,
                gettingPokemon: false,
                error: action.error
            }
        };
        default:{
            return {...state};
        }
    }
}