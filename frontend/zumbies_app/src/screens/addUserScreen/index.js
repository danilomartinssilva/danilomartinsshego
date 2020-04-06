import React, { useState } from 'react';
import { View, ActivityIndicator, ScrollView, Platform, SafeAreaView } from 'react-native';

import { Container, Input, SubmitButton, TextSubmitButton } from './styles';
import AvatarComponent from '../../components/AvatarComponent';
import api from '../../store/api';


export default function addUserScreen({ navigation }) {

  async function addUser() {
    const apiServer = await api.post('/user/add', {
      name, email, password
    })
    if (apiServer.status) {
      navigation.navigate('LoginScreen');
    }

  }

  const [avatar, setAvatar] = useState('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [password_repeat, setPasswordRepeat] = useState('')
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#483434" }}>
        <Container
          keyboardVerticalOffset={Platform.OS == 'ios' ? -65 : 10}
          behavior="padding"
          behavior={Platform.Os == "ios" ? "padding" : null}>
          <AvatarComponent onPress={() => alert('Teste')} />
          <Input placeholder="Nome" placeholderTextColor="#7D7A7A" onChangeText={(name) => setName(name)} />
          <Input placeholder="Email" placeholderTextColor="#7D7A7A" onChangeText={(email) => setEmail(email)} />
          <Input secureTextEntry placeholder="Senha" placeholderTextColor="#7D7A7A" onChangeText={(password) => setPassword(password)} />
          <Input secureTextEntry placeholder="Repetir senha" placeholderTextColor="#7D7A7A"
            onChangeText={(password_repeat) => setPasswordRepeat(password_repeat)}
          />
          <SubmitButton onPress={() => addUser()}>
            <TextSubmitButton>
              Cadastrar Usuário
        </TextSubmitButton>
            {/*   <ActivityIndicator
          animating={true}

        /> */}
          </SubmitButton>

        </Container>
      </ScrollView>
    </SafeAreaView>

  );
}
