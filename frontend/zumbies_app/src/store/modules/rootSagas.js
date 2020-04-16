import auth from './auth/sagas'
import users from './users/sagas'
import { all } from 'redux-saga/effects'
export default function* rootSaga() {
  return yield all([
    auth
  ])
}