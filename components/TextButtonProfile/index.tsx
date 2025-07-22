import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { StyledTextButton, Text } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon?: string;
};

export default function TextButtonProfile({ title, icon, ...rest }: Props) {
  return (
    <StyledTextButton activeOpacity={0.7} {...rest}>
      <Text>{icon}</Text>
      <Text>{title}</Text>
    </StyledTextButton>
  );
}
