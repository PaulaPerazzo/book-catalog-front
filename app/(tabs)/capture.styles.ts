import styled from 'styled-components/native';

export const Screen = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  padding: 24px 20px 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 800;
`;

export const CloseBtn = styled.TouchableOpacity`
  padding: 8px;
`;

export const CloseText = styled.Text`
  font-size: 26px;
  line-height: 26px;
`;

export const CameraWrap = styled.View`
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  margin: 8px 20px 60px;
`;

export const Mask = styled.View`
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.25);
`;

export const Guide = styled.View`
  width: 80%;
  height: 120px;
  border: 2px solid rgba(255,255,255,0.95);
  border-radius: 8px;
  background-color: transparent;
`;

export const BottomBar = styled.View`
  padding: 12px 20px 24px;
  gap: 12px;
`;

export const ActionBtn = styled.TouchableOpacity`
  height: 48px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #6C63FF;
`;

export const ActionText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
`;

export const InfoText = styled.Text`
  margin: 24px 20px;
  font-size: 16px;
  color: #444;
`;
