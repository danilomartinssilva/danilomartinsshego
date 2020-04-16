import React from 'react';
import { View, Image } from 'react-native';

// import { Container } from './styles';

export default function CircleBorder({ size, src }) {
  return (
    <Image
      source={{ uri: src }}
      style={{
        width: size, height: size,

        borderRadius: size / 2,
      }}
    />
  );
}
