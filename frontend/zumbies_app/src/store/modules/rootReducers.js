import { combineReducers } from "redux";
import users from './users/reducer'
import auth from './users/reducer'
export default combineReducers({
  users,
  auth
})
