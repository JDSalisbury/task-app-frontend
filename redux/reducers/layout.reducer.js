const initialState = {
    showOverlay: false,
    item: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_OVERLAY":{
            return {
                ...state,
                showOverlay: true,
                item: action.data
            }
        };
        case "CLOSE_OVERLAY":{
            return {
                ...state,
                showOverlay: false,
                item: {}
            }
        };
 
        default:{
            return {...state};
        }
    }
}