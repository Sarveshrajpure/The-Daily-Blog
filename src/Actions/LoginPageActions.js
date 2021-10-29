import { SET_BLOGGER, LOGOUT_BLOGGER } from "./types";

export const set_blogger = (blogger) => {
  return {
    type: SET_BLOGGER,
    payload: blogger,
  };
};

export const logout_blogger = (blogger) => {
  return {
    type: LOGOUT_BLOGGER,
    payload: blogger,
  };
};
