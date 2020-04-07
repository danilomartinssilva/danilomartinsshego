export function AddUserRequest(user) {
  return {
    type: `@USER/ADD_USER_REQUEST`,
    user
  }
}
export function AddUserSuccess(user) {
  return {
    type: `@USER/ADD_USER_SUCCESS`,
    user
  }
}
export function AddUserFailure() {
  return {
    type: `@USER/ADD_USER_FAILURE`,

  }
}

