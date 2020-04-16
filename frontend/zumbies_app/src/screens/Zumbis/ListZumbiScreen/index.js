import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Container, Separator } from './styles'
import ItemListComponent from './ItemList';

// import { Container } from './styles';
const zumbis = [
  {
    owner: "Danilo Martins da Silva",
    avatar_owner: "https://www.processus.com.br/wp-content/uploads/2015/03/sample-avatar.jpg",
    name: 'Zumbi dos Palmares',
    id: 1,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu",
    avatar: "https://abrilexame.files.wordpress.com/2016/09/size_960_16_9_zumbi5.jpg"
  },
  {
    owner: "Danilo Martins da Silva",
    avatar_owner: "https://www.processus.com.br/wp-content/uploads/2015/03/sample-avatar.jpg",
    name: 'Zumbi 2',
    id: 1,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu",
    avatar: "https://img.olhardigital.com.br/uploads/acervo_imagens/2012/04/r16x9/20120405122726_1200_675_-_zumbis.jpg"
  },
  {
    owner: "Danilo Martins da Silva",
    avatar_owner: "https://www.processus.com.br/wp-content/uploads/2015/03/sample-avatar.jpg",
    name: 'Zumbi 3',
    id: 1,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu",
    avatar: "https://img.r7.com/images/2014/11/20/2r89vtqk23_9odx44mtik_file.jpg"
  },

]

export default function ListZumbiScreen({ navigation }) {
  return (
    <Container>

      <FlatList
        data={zumbis}
        ItemSeparatorComponent={(item, index) => (
          <Separator />
        )}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ItemListComponent
            navigation={navigation}
            item={item}

          />
        )}
      />

    </Container>
  );
}
