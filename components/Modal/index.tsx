import { BlurView } from 'expo-blur';
import React from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import {
    ButtonRow,
    CancelButton,
    CancelText,
    CenteredView,
    ConfirmButton,
    ConfirmText,
    Message,
    ModalCard,
    Title,
} from './styles';

type Props = {
  visible: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmModal({
  visible,
  title,
  message,
  confirmText = 'Yes',
  cancelText = 'No',
  onConfirm,
  onCancel,
}: Props) {
  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onCancel}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <BlurView intensity={80} tint="light" style={{ flex: 1 }} />
      </TouchableWithoutFeedback>

      <CenteredView>
        <ModalCard>
          <Title>{title}</Title>
          <Message>{message}</Message>

          <ButtonRow>
            <ConfirmButton onPress={onConfirm}>
              <ConfirmText>{confirmText}</ConfirmText>
            </ConfirmButton>
            <CancelButton onPress={onCancel}>
              <CancelText>{cancelText}</CancelText>
            </CancelButton>
          </ButtonRow>
        </ModalCard>
      </CenteredView>
    </Modal>
  );
}
