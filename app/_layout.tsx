import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login"  />
      <Stack.Screen name="Signup" />

      <Stack.Screen
        name="(tabs)"
        options={{ presentation: 'modal', headerShown: false }}
      />
      
    </Stack>
  );
}
