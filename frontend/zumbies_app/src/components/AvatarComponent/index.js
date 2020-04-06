import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Container, Text, Image } from './styles';
const image = `https://cdn3.iconfinder.com/data/icons/unigrid-phantom-human-vol-3-1/60/011_103_user_profile_avatar_man_boy_silhoette-512.png`

export default function AvatarComponent({ onPress }) {
  return (

    <Container onPress={onPress}>
      <Image
        source={{ uri: image }}
        resizeMode="contain"

      />

      <Ionicons
        name="ios-camera"
        size={30}
        style={{ color: 'gray' }}

      />

    </Container>
  );
}
