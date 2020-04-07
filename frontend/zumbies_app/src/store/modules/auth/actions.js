export function LoginRequest(login) {
  return {
    type: '@LOGIN/LOGIN_REQUEST',
    login
  }

}
export function LoginSuccess(result) {
  return {
    type: '@LOGIN/LOGIN_SUCCESS',
    result
  }
}
export function LoginFailure(error) {
  return {
    type: '@LOGIN/LOGIN_FAILURE',
    error
  }
}