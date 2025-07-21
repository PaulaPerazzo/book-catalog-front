import { 
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard 
  } from "react-native";
  import { Container } from "./components/signup/styles";
  import { Title, Subtitle } from "./components/global.styles";
  import Card from "./components/Bookcard";
  
  export default function Home() {
    const coverImage = require("/Users/paulaperazzo/Documents/projects/book_categorizer/book cataloging app front/book-cataloging-app-front/app/image/cover.jpg");

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
              <Card imageSource={coverImage} subtitle="Author 1" title="Book 1"/>
              <Card imageSource={coverImage} subtitle="Author 2" title="Book 2"/>
              <Card imageSource={coverImage} subtitle="Author 3" title="Book 3"/>
              <Card imageSource={coverImage} subtitle="Author 4" title="Book 4"/>
            </Container>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
