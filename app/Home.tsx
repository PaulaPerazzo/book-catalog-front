import React, { useState } from "react";
import { Container } from "./components/signup/styles";
import { Title, Subtitle, styles } from "./components/global.styles";
import Card from "./components/Bookcard";
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Text,
  StyleSheet,
} from "react-native";
import { BlurView } from "expo-blur";
import { CardLayout } from "./types/cards";

export default function Home() {
  const coverImage = require("/Users/paulaperazzo/Documents/projects/book_categorizer/book cataloging app front/book-cataloging-app-front/app/image/cover.jpg");
  const [openCardId, setOpenCardId] = useState<number | null>(null);
  const [cardLayout, setCardLayout] = useState<Record<number, { x: number; y: number; width: number; height: number }>>({});

  const handleLayout = (id: number, layout: CardLayout) => {
    setCardLayout((prev) => ({ ...prev, [id]: layout }));
  }

  const handlePressMenu = (id: number) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  const handleDelete = (id: number) => {
    console.log(`Delete card with id: ${id}`);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Title>Book Catalog</Title>
            <Subtitle>Home</Subtitle>
            {[0, 1, 2, 3].map((i) => (
              <Card
                key={i}
                id={i}
                title={`Book Title Example ${i}`}
                subtitle="Author's name"
                imageSource={coverImage}
                onLayout={handleLayout}
                onPressMenu={handlePressMenu}
              />
            ))}

              <Card
                key={4}
                id={4}
                title={"uma pequena coreografia do adeus la la la al"}
                subtitle="Author's name"
                imageSource={coverImage}
                onLayout={handleLayout}
                onPressMenu={handlePressMenu}
              />
          </Container>
        </ScrollView>
      </TouchableWithoutFeedback>

        {openCardId !== null && cardLayout[openCardId] && (
          <Modal
            transparent
            visible
            animationType="fade"
            onRequestClose={() => setOpenCardId(null)}
          >
            <TouchableWithoutFeedback onPress={() => setOpenCardId(null)}>
              <BlurView intensity={80} tint="light" style={StyleSheet.absoluteFill} />
            </TouchableWithoutFeedback>
            
            <View
              style={{
                position: "absolute",
                top: cardLayout[openCardId].y + 8,
                left: cardLayout[openCardId].x + cardLayout[openCardId].width - 140,
              }}
            >
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => {
                  setOpenCardId(null);
                  handleDelete(openCardId);
                }}
              >
                <Text style={styles.actionText}>Remover livro</Text>
              </TouchableOpacity>
            </View>
        </Modal>
      )}
    </KeyboardAvoidingView>
  );
}
