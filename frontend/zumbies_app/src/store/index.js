import '../config/Reactotron'
import { createStore, applyMiddleware, compose } from 'redux'
import rootSagas from './modules/rootSagas'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import persistReducer from 'redux-persist/es/persistReducer'
import { AsyncStorage } from 'react-native'
import logger from 'redux-logger'
import rootReducers from './modules/rootReducers'

const persistorConfig = {
  key: 'zumbies_app',
  storage: AsyncStorage,
  whiteList: ['users']
}

const persistedReducer = persistReducer(persistorConfig, rootReducers)
const sagaMiddlweare = createSagaMiddleware()
const middlewares = applyMiddleware(sagaMiddlweare, logger)
const enhancer = process.env.NODE_ENV === 'developement' ?
  compose(console.tron.createEnhancer(), middlewares)
  : middlewares

const store = createStore(persistedReducer, enhancer)
const persistor = persistStore(store)
sagaMiddlweare.run(rootSagas)
export { store, persistor }