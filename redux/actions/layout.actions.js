export const showOverlay = () => dispatch => {
    dispatch({ type: "SHOW_OVERLAY"});
};

export const closeOverlay = () => dispatch => {
    dispatch({ type: "CLOSE_OVERLAY"});
};