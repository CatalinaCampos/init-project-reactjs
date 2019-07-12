import { SET_NOTICE } from "../actions/notice";

const initialState = {
  title: "",
  message: "",
  kind: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTICE:
      return {
        ...state,
        message: action.message
      };
    default:
      return { ...state };
  }
};

export default reducer;
