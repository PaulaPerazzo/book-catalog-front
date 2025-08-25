import React from 'react';
import { Modal } from 'react-native';
import {
    Actions,
    Backdrop,
    Button,
    ButtonText,
    Card,
    CloseX,
    Message,
    Title
} from './styles';

type Props = {
  visible: boolean;
  title: string;
  message: string;
  okText?: string;
  onClose: () => void;
};

export default function InfoModal({ visible, title, message, okText = 'Ok', onClose }: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Backdrop>
        <Card>
          <CloseX onPress={onClose}>×</CloseX>
          <Title>{title}</Title>
          <Message>{message}</Message>

          <Actions>
            <Button onPress={onClose} accessibilityLabel={`${okText} button`}>
              <ButtonText>{okText}</ButtonText>
            </Button>
          </Actions>
        </Card>
      </Backdrop>
    </Modal>
  );
}
