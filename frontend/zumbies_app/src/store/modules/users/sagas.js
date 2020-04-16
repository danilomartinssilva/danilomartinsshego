import { all, take, takeLatest, put, call, fork } from 'redux-saga/effects'
import api from '../../api';


import { LoadUserSuccess, LoadUserRequest } from './actions'


function _loadRequest(id) {
  return api.get(`/user/?id=${id}`);
}

function* recoveryUserLogged({ id }) {
  try {
    const userRequest = yield call(_loadRequest, id)
    const { data } = userRequest
    yield put(LoadUserSuccess(data));


  }
  catch (err) {
    yield put(LoadUserFailure('Erro ao retornar usuário'))
  }

}

function* watchLogin() {
  while (true) {
    const success_login = yield take('@LOGIN/LOGIN_SUCCESS');
    yield put(LoadUserRequest(success_login.result.user.id));
  }
}
export default all([
  fork(watchLogin)
])


