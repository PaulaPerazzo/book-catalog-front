import { router } from "expo-router";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import BigButton from "../components/BigButton";
import { BodyText, Container, Subtitle, Title } from "../components/global.styles";
import Input from "../components/Input";
import TextButton from "../components/TextButton";

export default function Signup() {
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
            <Image 
              source={require('../assets/LOGO.png')}
              style={{ width: 120, height: 120, marginBottom: 25 }}
              resizeMode="contain"
            />
            <Title>My Library</Title>
            <Subtitle>Sign Up</Subtitle>
            <Input label="Email"/>
            <Input label="Password"/>
            <BigButton 
              title="Sign Up" 
              onPress={() => router.replace('/Home')}
            />
            <BodyText> Already have an account? </BodyText>
            <TextButton 
              title="Log in"
              onPress={() => router.push('/Home')}
            />
          </Container>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
