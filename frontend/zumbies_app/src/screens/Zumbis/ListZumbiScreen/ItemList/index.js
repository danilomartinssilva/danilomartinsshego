import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
  Container, Header,
  ContainerBio, Name,
  Option,
  ContainerDescription,
  Description,
  ImageFeed

} from './styles';
import { Text, View, Alert } from 'react-native';
import CircleBorder from '../../../../components/CircleBorder';
import colors from '../../../../themes/colors';
import ModalAddZumbi from '../../../../components/ModalAddZumbi';


export default function ItemListComponent({ item, navigation }) {
  const [isVisibleModalAddZumbi, setVisibleModalAddZumbi] = useState(false)



  function handleOptions({ id }) {




    Alert.alert('Adicionar recurso', 'Selecione uma opção para fortalecer o seu monstro!', [
      {
        text: "Adicionar armadura", onPress: () => { navigation.navigate('AddReinforcementScreen', { zumbi_id: id }) }
      }, {
        text: 'Adicionar poder', onPress: () => { navigation.navigate('AddPowerScreen', { zumbi_id: id }) }
      }, {
        text: 'Cancelar', onPress: () => { }
      }
    ])

  }


  return (
    <Container>
      <Text >{JSON.stringify(navigation)}</Text>

      <Header>
        <CircleBorder
          src={item.avatar_owner}
          size={60}
        />
        <ContainerBio>
          <Name>{item.owner}</Name>
        </ContainerBio>
        <Option onPress={() => handleOptions(item)}>
          <Ionicons
            name="ios-more"
            style={{ color: colors.white }}
            size={20}
          />
        </Option>
      </Header>
      <ContainerDescription>
        <Description>{item.description}</Description>
      </ContainerDescription>

      <ImageFeed
        source={{ uri: item.avatar }}

      />



    </Container>
  );
}
