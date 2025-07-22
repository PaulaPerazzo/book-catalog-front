import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MenuContainer, TabButton } from './style';

type TabItem = {
  route: string;
  icon: keyof typeof Ionicons['glyphMap'];
  activeIcon: keyof typeof Ionicons['glyphMap'];
};

const TABS: TabItem[] = [
  { route: 'Home',   icon: 'home-outline',     activeIcon: 'home'     },
  { route: 'Capture',icon: 'camera-outline',   activeIcon: 'camera'   },
  { route: 'Profile',icon: 'person-outline',   activeIcon: 'person'   },
];

type Props = {
  currentRoute: string;
  onTabPress: (route: string) => void;
};

export default function BottomMenu({ currentRoute, onTabPress }: Props) {
  return (
    <MenuContainer>
      {TABS.map(tab => {
        const isActive = currentRoute === tab.route;
        return (
          <TabButton
            key={tab.route}
            onPress={() => onTabPress(tab.route)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isActive ? tab.activeIcon : tab.icon}
              size={32}
              color={isActive ? '#8C78FC' : '#888'}
            />
          </TabButton>
        );
      })}
    </MenuContainer>
  );
}
