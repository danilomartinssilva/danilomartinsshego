const INITIAL_STATE = {
  result: null,
  isBusy: false,
  error: ''

}

export default function auth(state = INITIAL_STATE, action) {

  switch (action.type) {
    case '@LOGIN/LOGIN_REQUEST':
      return { ...state, isBusy: true }
    case '@LOGIN/LOGIN_SUCCESS':
      return { ...state, isBusy: false, result: action.result }
    case '@LOGIN/LOGIN_FAILURE':
      return { ...state, isBusy: false, result: null, error: action.error }
    default:
      return state
  }

}