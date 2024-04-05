export const authReducer = (state = {name: "Lexi", role: "Seller"}, action) => {
  switch (action.type) {
    case "USER_LOGGED":
      return {...state, ...action.payload};
    case "USER_LOGGEDOUT":
        return action.payload;
    default:
      return state;
  }
}