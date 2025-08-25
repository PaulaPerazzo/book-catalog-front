import styled from 'styled-components/native';

export const Backdrop = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.35);
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const Card = styled.View`
  width: 100%;
  background: #fff;
  border-radius: 16px;
  padding: 24px 20px 16px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 12px;
  elevation: 6;
`;

export const CloseX = styled.Text`
  position: absolute;
  right: 14px;
  top: 10px;
  font-size: 22px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  margin-top: 8px;
`;

export const Message = styled.Text`
  font-size: 16px;
  text-align: center;
  margin: 14px 6px 22px;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  padding: 12px 22px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #8b78ff;
  background: #fff;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #4f3cff;
`;
