export default (currentId = null, action) => {
  switch (action.type) {
    case "TAKE_ID":
      return action.payload;
    default:
      return currentId;
  }
};
