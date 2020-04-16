import React from 'react';
import { View } from 'react-native';
import Routes from '../Router';
import { store } from './store';
import * as NavigationService from './Utils/NavigationService'

// import { Container } from './styles';

export default function App() {
  const { auth } = store.getState();

  const { logged } = auth
  /*   const Routes = createRouter() */
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} >

      <Routes logged={logged} />
    </View>

  );
}
