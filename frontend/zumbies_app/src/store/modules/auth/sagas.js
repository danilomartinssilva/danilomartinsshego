import { all, take, takeLatest, put, call } from 'redux-saga/effects'
import api from '../../api'
import { LoginFailure, LoginSuccess } from './actions'
import * as NavigationService from '../../../Utils/NavigationService'
function loginRequest(email, password) {
  return api.post('/login', { email, password });
}


function* doLogin({ login }) {
  console.log('@@@@@@@@@@@LOGIN', login)
  try {
    const { email, password } = login;
    const requestLogin = yield call(loginRequest, email, password);

    if (requestLogin.status !== 200) {

      yield put(LoginFailure(requestLogin.message))
    }
    else {
      const { data } = requestLogin;
      yield put(LoginSuccess(data))
      NavigationService.navigate('AboutScreen')
    }
  }
  catch (err) {
    console.log('Erro na requisiçao', err)
    yield put(LoginFailure('Erro ao conectar no servidor'))
  }
}


export default all([
  takeLatest('@LOGIN/LOGIN_REQUEST', doLogin)
])