export const showOverlay = (data) => dispatch => {
    dispatch({ type: "SHOW_OVERLAY", data});
};

export const closeOverlay = () => dispatch => {
    dispatch({ type: "CLOSE_OVERLAY"});
};