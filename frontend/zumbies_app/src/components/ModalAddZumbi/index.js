import React from 'react';
import { View, Modal, Text } from 'react-native';

import { Container, Content } from './styles';

export default function ModalAddZumbi({ isVisible = false, handleVisible }) {


  return (
    <Container>

      <Modal
        onRequestClose={() => {
          handleVisible()
        }}
        visible={isVisible}
        animated
        animationType="fade"
        transparent={false}
      >

        <Content>
          <Text>d</Text>

        </Content>




      </Modal>



    </Container>
  );
}
