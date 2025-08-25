import BookCount from '@/components/BookCount';
import { Container, Subtitle, Title } from '@/components/global.styles';
import ConfirmModal from '@/components/Modal';
import TextButtonProfile from '@/components/TextButtonProfile';
import React, { useState } from 'react';
import { BodyText, ButtonContainers, ContentContainer, DelveloperText } from './styles';

export default function Profile() {
  const [showLogout, setShowLogout] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

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
                // onPress={() => {console.log('log out');}}
                onPress={() => setShowLogout(true)}
                />
              <TextButtonProfile 
                title="Delete account"
                icon="🗑️"
                // onPress={() => {console.log('delete account');}}
                onPress={() => setShowDelete(true)}
                />
          </ButtonContainers>
        </ContentContainer>
      </Container>

      <ConfirmModal
        visible={showLogout}
        title="Log out"
        message="Are you sure you want to log out?"
        confirmText="Yes"
        cancelText="No"
        onConfirm={() => {
          setShowLogout(false);
          console.log('logged out');
        }}
        onCancel={() => setShowLogout(false)}
      />

      <ConfirmModal
        visible={showDelete}
        title="Delete account"
        message="This action is permanent and will delete all of your data."
        confirmText="Yes"
        cancelText="No"
        onConfirm={() => {
          setShowDelete(false);
          console.log('account deleted');
        }}
        onCancel={() => setShowDelete(false)}
      />

      <DelveloperText>Developed by Paula Perazzo</DelveloperText>
    </>
  );
}
