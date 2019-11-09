const initialState = {
    showOverlay: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_OVERLAY":{
            return {
                ...state,
                showOverlay: true
            }
        };
        case "SHOW_OVERLAY":{
            return {
                ...state,
                showOverlay: false
            }
        };
 
        default:{
            return {...state};
        }
    }
}