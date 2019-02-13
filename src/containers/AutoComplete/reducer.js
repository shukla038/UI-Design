export default (state = {}, action) => {
  switch (action.type) {
    case "FIRST_ACTION": {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};
