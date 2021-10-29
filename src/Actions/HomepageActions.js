import { CREATE_BLOG } from "./types";

export const create_blog = (blog) => {
  return {
    type: CREATE_BLOG,
    payload: {
      id: new Date().getTime().toString(),
      data: blog,
    },
  };
};
