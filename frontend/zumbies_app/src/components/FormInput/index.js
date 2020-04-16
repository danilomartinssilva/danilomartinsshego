import React from 'react';
import { View } from 'react-native';

import { Container, Input } from './styles';
import colors from '../../themes/colors';

export default function FormInput({ placeholder, value, onChangeText, keyboardType = "default", autoCapitalize = "words", multiline }) {
  return (
    <Container>
      <Input

        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}

      />
    </Container>
  );
}
