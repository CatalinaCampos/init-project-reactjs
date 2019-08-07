import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  RESTORE_AUTH_INFO,
  VALIDATE_TOKEN_REQUEST,
  VALIDATE_TOKEN_SUCCESS,
  CLEAR_AUTH_INFO,
  PASSWORD_RECOVERY_REQUEST,
  PASSWORD_RECOVERY_FINISHED,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from '../actions/auth';

const initialState = {
  user: {
    id: 0,
    email: '',
    uid: '',
    role: ''
  },
  headers: {
    accessToken: ''
  },
  signedIn: localStorage.jwt !== undefined,
  ongoingRequest: {
    signIn: false,
    signOut: false,
    passwordRecovery: false
  }
};

const setHeaders = action => ({
  accessToken: action.response.headers.get('jwt')
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signIn: true }
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.result,
        headers: setHeaders(action),
        ongoingRequest: { ...state.ongoingRequest, signIn: false },
        signedIn: true
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signIn: false }
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signIn: false }
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.result,
        headers: setHeaders(action),
        ongoingRequest: { ...state.ongoingRequest, signIn: true },
        signedIn: true
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signIn: false }
      };
    case SIGN_OUT_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signOut: false }
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...initialState,
        ongoingRequest: { ...state.ongoingRequest, signOut: false },
        signedIn: false
      };
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signOut: false }
      };
    case VALIDATE_TOKEN_REQUEST:
      return {
        ...state
      };
    case RESTORE_AUTH_INFO:
      return {
        ...state,
        headers: action.auth,
        signedIn: true
      };
    case CLEAR_AUTH_INFO:
      localStorage.removeItem('jwt');
      return {
        ...state,
        user: {
          id: '',
          email: '',
          uid: '',
          role: ''
        },
        headers: {
          accessToken: '',
          client: '',
          expiry: '',
          tokenType: '',
          uid: ''
        },
        signedIn: false
      };
    case VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        user: action.result,
        headers: setHeaders(action)
      };
    case PASSWORD_RECOVERY_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, passwordRecovery: true }
      };
    case PASSWORD_RECOVERY_FINISHED:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, passwordRecovery: false }
      };
    default:
      return state;
  }
};

export default reducer;
