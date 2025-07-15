import React from 'react';
import { TextInputProps } from 'react-native';
import { Wrapper, StyledTextInput, Label } from './styles';

type InputProps = TextInputProps & {
  label?: string;
};

export default function Input({ label, ...rest }: InputProps) {
  return (
    <Wrapper>
      <StyledTextInput placeholder={label} placeholderTextColor="#6E6E73" {...rest} />
    </Wrapper>
  );
}
