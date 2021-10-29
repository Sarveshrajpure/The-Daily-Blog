import { CREATE_BLOG } from "../Actions/types";
const blog = [];

const HomePageReducer = (state = { Blog: blog }, action) => {
  switch (action.type) {
    case CREATE_BLOG:
      const { id, data } = action.payload;

      return {
        ...state,
        Blog: [
          ...state.Blog,
          {
            id: id,
            data: data,
          },
        ],
      };
    default:
      return state;
  }
};
export default HomePageReducer;
