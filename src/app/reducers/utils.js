import { utilsTypes } from '../actions/utils';

const initialState = {
  slides: [],
  page: {
    body: null
  },
  alert: {
    show: false,
    title: '',
    kind: '',
    timeout: 3000,
    message: ''
  },
  ongoingRequest: {
    getSlides: false,
    getPage: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case utilsTypes.GET_SLIDES_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, getSlides: true }
      };
    case utilsTypes.GET_SLIDES_SUCCESS:
      return {
        ...state,
        slides: action.result,
        ongoingRequest: { ...state.ongoingRequest, getSlides: false }
      };
    case utilsTypes.GET_SLIDES_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, getSlides: false }
      };
    case utilsTypes.GET_PAGE_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, getPage: true },
        url: action.url
      };
    case utilsTypes.GET_PAGE_SUCCESS:
      return {
        ...state,
        page: action.result,
        ongoingRequest: { ...state.ongoingRequest, getPage: false }
      };
    case utilsTypes.GET_PAGE_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, getPage: false }
      };
    case utilsTypes.SET_ALERT:
      return {
        ...state,
        alert: {
          show: true,
          kind: action.kind,
          timeout: action.timeout || initialState.alert.timeout,
          message: action.message,
          title: action.title
        }
      };
    case utilsTypes.CLOSE_ALERT:
      return {
        ...state,
        alert: initialState.alert
      };
    default:
      return state;
  }
};

export default reducer;
