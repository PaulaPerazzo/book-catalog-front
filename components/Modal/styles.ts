import styled from 'styled-components/native';

const PURPLE = '#8C78FC';

export const CenteredView = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const ModalCard = styled.View`
  width: 100%;
  max-width: 360px;
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  elevation: 6;
  shadow-color: #000;
  shadow-offset: 0px 10px;
  shadow-opacity: 0.15;
  shadow-radius: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
`;

export const Message = styled.Text`
  font-size: 15px;
  text-align: center;
  color: #444;
  line-height: 22px;
  margin-bottom: 20px;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 12px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  flex: 1;
  height: 44px;
  border-radius: 10px;
  border: 1.5px solid ${PURPLE};
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const CancelButton = styled.TouchableOpacity`
  flex: 1;
  height: 44px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${PURPLE};
`;

export const ConfirmText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export const CancelText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;
