import React from 'react';
import { Container, Title, Subtitle } from '@/components/global.styles';
import { BodyText, ContentContainer, ButtonContainers, DelveloperText } from './styles';
import BookCount from '@/components/BookCount';
import TextButtonProfile from '@/components/TextButtonProfile';

export default function Profile() {
  return (
    <>
      <Container>
        <Title> App Title </Title>
        <Subtitle> Profile </Subtitle>

        <ContentContainer>
          <BodyText>login@gmail.com</BodyText>
          <BookCount count={100}/>

          <ButtonContainers>
            <TextButtonProfile 
                title="Export list to PDF"
                icon="📄"
                onPress={() => {console.log('export to pdf');}}
                />
              <TextButtonProfile 
                title="Log out"
                icon="🚪"
                onPress={() => {console.log('log out');}}
                />
              <TextButtonProfile 
                title="Delete account"
                icon="🗑️"
                onPress={() => {console.log('delete account');}}
                />
          </ButtonContainers>
        </ContentContainer>

      </Container>
      <DelveloperText>Developed by Paula Perazzo</DelveloperText>
    </>
  );
}
