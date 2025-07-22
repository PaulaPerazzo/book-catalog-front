import styled from "styled-components/native";
import { Platform, StyleSheet } from "react-native";

export const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: #1C1C1E;
    margin-bottom: 25px;
`;

export const Subtitle = styled.Text`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 66px;
    color: #1C1C1E;
`;

export const BodyText = styled.Text`
    font-size: 16px;
    color: #1C1C1E;
    /* margin-top: 10px; */
`;

export const styles = StyleSheet.create({
    actionButton: {
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 6,
      
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        },
        android: { elevation: 3 },
      }),
    },

    actionText: {
      fontSize: 14,
      color: "#e33",
      fontWeight: "500",
    },
  });

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  padding: 30px;
`;
