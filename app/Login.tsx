import { Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard 
} from "react-native";
import { Container } from "../components/global.styles";
import { Title, Subtitle, BodyText } from "../components/global.styles";
import Input from "../components/Input";
import BigButton from "../components/BigButton";
import TextButton from "../components/TextButton";
import { router } from "expo-router";
  
  export default function Login() {
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
              <Title>Book Catalog</Title>
              <Subtitle>Log In</Subtitle>
              <Input label="Email"/>
              <Input label="Password"/>
              <BigButton 
                title="Log In" 
                onPress={() => router.replace('/Home')}
              />
              <BodyText> Don't have an account? </BodyText>
              <TextButton 
                title="Sing up"
                onPress={() => router.push('/Signup')}
              />
            </Container>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
