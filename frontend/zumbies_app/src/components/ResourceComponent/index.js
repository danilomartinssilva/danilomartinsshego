import React from 'react';
import { View } from 'react-native';

import { Container, Image } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../themes/colors';
export default function ResourceComponent({ image, onPress }) {
  return (<Container onPress={onPress}>

    <Image
      source={{ uri: image }}

      resizeMode="cover"
    />

    <Ionicons
      name="ios-camera"
      size={30}
      style={{ color: colors.dark, position: 'absolute', bottom: 10, }}

    />

  </Container>
  );
}
