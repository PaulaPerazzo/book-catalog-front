import React from 'react';
import { Container, Title, Subtitle } from '@/components/global.styles';
import { BodyText } from './styles';
import BookCount from '@/components/BookCount';

export default function Profile() {
  return (
    <Container>
      <Title> App Title </Title>
      <Subtitle> Profile </Subtitle>

      <BodyText>login@gmail.com</BodyText>

      <BookCount count={100}/>
    </Container>
  );
}
