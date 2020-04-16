const INITIAL_STATE = {
  result: null,
  isBusy: false,
  error: '',
  logged: false,
  token: ''

}

export default function auth(state = INITIAL_STATE, action) {

  switch (action.type) {
    case '@LOGIN/LOGIN_REQUEST':
      return { ...state, isBusy: true }
    case '@LOGIN/LOGIN_SUCCESS':

      return { ...state, isBusy: false, result: action.result.user, logged: true, token: action.result.token }
    case '@LOGIN/LOGIN_FAILURE':
      return { ...state, isBusy: false, result: null, error: action.error, logged: false }
    default:
      return state
  }

}