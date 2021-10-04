export const setCurrentId = (id) => async (dispatch) => {
  dispatch({ type: "TAKE_ID", payload: id });
};
