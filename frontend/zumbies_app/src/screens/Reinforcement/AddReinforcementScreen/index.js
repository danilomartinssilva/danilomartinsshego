import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';
import FormInput from '../../../components/FormInput';

import { Container, Title } from './styles';
import AvatarComponent from '../../../components/AvatarComponent';
import ButtonComponent from '../../../components/ButtonComponent';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import ResourceComponent from '../../../components/ResourceComponent';


export default function AddReinforcementScreen(navigation) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [zumbi_id, setZumbi] = useState(navigation.route.params.zumbi_id)
  const [preview, setPreview] = useState('')


  async function getPermissionAsync() {
    if (Constants.platform.ios) {
      let { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
    } else {
      let { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status !== 'granted') {
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
          return;
        }

      }
      console.tron.log(status)
    }
  }
  async function _pickImage() {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.AllL,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      setPreview(result.uri)


    } catch (E) {
      console.tron.log(E);
    }
  }

  async function _uploadFile() {
    try {

    }
    catch (err) {

    }

  }
  function _onSave() {


  }

  useEffect(() => {
    getPermissionAsync()
  }, [])

  useEffect(() => {
    setZumbi(navigation.route.params.zumbi_id)

  }, [navigation])

  return (

    <Container enabled={Platform.OS === "ios" ? true : false}  >
      <ScrollView>
        <Title>Adicionar Armadura</Title>
        {/* <AvatarComponent onPress={() => _pickImage()} image={preview} /> */}
        <ResourceComponent image={preview} onPress={() => _pickImage()} />
        <FormInput
          placeholder={"Digite o nome da armadura"}
          value={name}
          onChangeText={(name) => setName(name)} />
        <FormInput
          placeholder="Descrição da armadura"
          value={description}
          multiline={true}
          onChangeText={(description) => setDescription(description)} />

        <ButtonComponent title={"Cadastrar"} />
        <ButtonComponent title={"Limpar"} color={'gray'} />
      </ScrollView>
    </Container>



  );
}
