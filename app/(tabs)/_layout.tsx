import React from 'react';
import { Slot, useSegments, useRouter } from 'expo-router';
import BottomMenu from '../../components/Menu';
import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function TabsLayout() {
  const TAB_ROUTES = ['Home', 'Capture', 'Profile'] as const;
  type TabRoute = typeof TAB_ROUTES[number];
  type PathRoute = `/${TabRoute}`;         

  const segments = useSegments();
  const current = segments[segments.length - 1];
  const router  = useRouter();

  const handleTabPress = (route: string) => {
    const path = `/${route}` as PathRoute;
    router.push(path);
  };

  return (
    <>
        <StatusBar style="dark" translucent backgroundColor="transparent" />

        <SafeAreaView style={{flex: 1, position: 'relative', backgroundColor: '#fff'}}>
        <Slot />
        <BottomMenu
            currentRoute={current}
            onTabPress={handleTabPress}
        />
        </SafeAreaView>
    </>
  );
}
