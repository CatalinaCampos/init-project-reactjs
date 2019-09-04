import { authTypes } from '../actions/auth';

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
    case authTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signIn: true }
      };
    case authTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.result,
        headers: setHeaders(action),
        ongoingRequest: { ...state.ongoingRequest, signIn: false },
        signedIn: true
      };
    case authTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signIn: false }
      };
    case authTypes.SIGN_UP_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signIn: false }
      };
    case authTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.result,
        headers: setHeaders(action),
        ongoingRequest: { ...state.ongoingRequest, signIn: true },
        signedIn: true
      };
    case authTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signIn: false }
      };
    case authTypes.SIGN_OUT_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signOut: false }
      };
    case authTypes.SIGN_OUT_SUCCESS:
      return {
        ...initialState,
        ongoingRequest: { ...state.ongoingRequest, signOut: false },
        signedIn: false
      };
    case authTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signOut: false }
      };
    case authTypes.VALIDATE_TOKEN_REQUEST:
      return {
        ...state
      };
    case authTypes.RESTORE_AUTH_INFO:
      return {
        ...state,
        headers: action.auth,
        signedIn: true
      };
    case authTypes.CLEAR_AUTH_INFO:
      localStorage.removeItem('jwt');
      return {
        ...state,
        user: initialState.user,
        headers: initialState.headers,
        signedIn: false
      };
    case authTypes.VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        user: action.result,
        headers: setHeaders(action)
      };
    case authTypes.PASSWORD_RECOVERY_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, passwordRecovery: true }
      };
    case authTypes.PASSWORD_RECOVERY_FINISHED:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, passwordRecovery: false }
      };
    default:
      return state;
  }
};

export default reducer;
