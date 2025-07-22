import styled from 'styled-components/native';

export const MenuContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #eee;
`;

export const TabButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;
