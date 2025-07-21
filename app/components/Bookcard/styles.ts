import styled from "styled-components/native";
import { Platform } from "react-native";

export const CardContainer = styled.View`
  width: 100%;
  border: 1px #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8%;
  padding-left: 8%;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
  
  ${Platform.OS === 'ios' && `
    shadow-color: #000;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.3;
    shadow-radius: 4px;
  `}

  ${Platform.OS === 'android' && `
    elevation: 4;
  `}
`;

export const TextContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const ContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8%;
  padding-left: 1%;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const BookImage = styled.Image`
  width: 64px;
  height: 80px;
  border-radius: 4px;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: #1C1C1E;
    max-width: 72%;
`;

export const Subtitle = styled.Text`
    font-size: 12px;
    font-weight: light;
    color: #6E6E73;
`;

export const MenuButton = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 8px;
  z-index: 10;
`;

export const ActionMenu = styled.View`
  position: absolute;
  top: 36px;
  right: 8px;
  background-color: #fff;
  border-radius: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  z-index: 20;

  ${Platform.OS === 'ios' && `
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.2;
    shadow-radius: 3px;
  `}
  
  ${Platform.OS === 'android' && `
    elevation: 3;
  `}
`;