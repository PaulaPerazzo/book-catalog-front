import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { StyledButton, ButtonText } from './styles';

type Props = TouchableOpacityProps & {
  title?: string;
  children?: React.ReactNode;
};

export default function BigButton({ title, children, ...rest }: Props) {
  return (
    <StyledButton activeOpacity={0.8} {...rest}>
      {title ? <ButtonText>{title}</ButtonText> : children}
    </StyledButton>
  );
}
