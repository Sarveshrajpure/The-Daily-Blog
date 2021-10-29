import { SET_BLOGGER, LOGOUT_BLOGGER } from "../Actions/types";

const blogger = {
  email: "",
  firstName: "",
  lastName: "",
  isAuth: false,
};
const LoginPageReducer = (state = { user: blogger }, action) => {
  switch (action.type) {
    case SET_BLOGGER:
      return { ...state, user: action.payload };
    case LOGOUT_BLOGGER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default LoginPageReducer;
