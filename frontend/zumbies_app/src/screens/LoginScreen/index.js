import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux'

import { Container, Input, SubmitButton, TextSubmitButton, Title, AddUserButton } from './styles';
import api from '../../store/api'


export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState('')
  async function handeLogin() {
    /*  const login = await api.post('/login', { email, password });
     const result = await login.data;
     if (result.status) {
       navigation.navigate('AboutScreen')
     } */
    const credential = { email, password }
    dispatch({ type: '@LOGIN/LOGIN_REQUEST', login: credential });





  }
  return (
    <Container>
      <Title>Acesso ao Zumbies</Title>
      <Input placeholder="Email" placeholderTextColor="#7D7A7A" onChangeText={(email) => setEmail(email)} />
      <Input secureTextEntry placeholder="Senha" placeholderTextColor="#7D7A7A" onChangeText={(password) => setPassword(password)} />
      <SubmitButton onPress={() => handeLogin()}>
        <TextSubmitButton>
          Login
        </TextSubmitButton>

      </SubmitButton>
      <AddUserButton onPress={() => navigation.navigate('AddUserScreen')}>
        <TextSubmitButton>
          Cadastrar
        </TextSubmitButton>

      </AddUserButton>
    </Container>


  );
}
