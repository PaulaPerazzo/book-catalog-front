import BookCount from '@/components/BookCount';
import { Container, Subtitle, Title } from '@/components/global.styles';
import ConfirmModal from '@/components/Modal';
import TextButtonProfile from '@/components/TextButtonProfile';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { BodyText, ButtonContainers, ContentContainer, DeveloperText } from './styles';

export default function Profile() {
  const [showLogout, setShowLogout] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showPDF, setShowPDF] = useState(false);

  const router = useRouter();

  const handleLogout = async () => {
    setShowLogout(false);
    // await logout();
    router.replace('Login');
  };

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
                onPress={() => setShowPDF(true)}
                />
              <TextButtonProfile 
                title="Log out"
                icon="🚪"
                onPress={() => setShowLogout(true)}
                />
              <TextButtonProfile 
                title="Delete account"
                icon="🗑️"
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
          // setShowLogout(false);
          // console.log('logged out');
          handleLogout();
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

      <ConfirmModal
        visible={showPDF}
        title="Export list to PDF"
        message="IN DEVELOPMENT: This feature is coming soon!"
        confirmText="Yes"
        cancelText="No"
        onConfirm={() => {
          setShowPDF(false);
          console.log('export to PDF requested');
        }}
        onCancel={() => setShowPDF(false)}
      />

      <DeveloperText>Developed by Paula Perazzo</DeveloperText>
    </>
  );
}
