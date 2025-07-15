import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { StyledTextButton, Text } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};

export default function TextButton({ title, ...rest }: Props) {
  return (
    <StyledTextButton activeOpacity={0.7} {...rest}>
      <Text>{title}</Text>
    </StyledTextButton>
  );
}
