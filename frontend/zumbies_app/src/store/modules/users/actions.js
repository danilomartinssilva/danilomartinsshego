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

export function LoadUserRequest(id) {
  return {
    type: '@USER/USER_LOAD_REQUEST',
    id

  }
}
export function LoadUserSuccess(user) {
  return {
    type: "@USER/USER_LOAD_SUCCESS",
    user
  }
}
export function LoadUserFailure() {
  return {
    type: "@USER/USER_LOAD_FAILURE",

  }
}

