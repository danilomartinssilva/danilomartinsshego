import React from 'react';
import { View } from 'react-native';

import { Container, Title } from './styles';

export default function ButtonComponent({ onPress, title = "Salvar", color }) {

  return (
    <Container color={color} onPress={onPress}>
      <Title>
        {title}
      </Title>

    </Container>
  );
}
