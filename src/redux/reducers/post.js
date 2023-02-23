import { USER_STATE_POST_CHANGE } from "../constants";

const initialState = {
  state: USER_STATE_POST_CHANGE,
  currentPost: null,
};

export const post = (state = initialState, action) => {
  switch (action.type) {
    case USER_STATE_POST_CHANGE:
      return {
        ...state,
        currentPost: action.currentPost,
      };
    default:
      return state;
  }
};
