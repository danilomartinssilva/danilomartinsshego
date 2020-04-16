import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store'
import Router from '../Router';
import App from './App';
// import { Container } from './styles';

export default function Main() {
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>


  );
}
