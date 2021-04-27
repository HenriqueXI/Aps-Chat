import React from 'react';

import { Container, Main, MinimifiedOptions, Users, SearchContainer, SearchInput, MainHeader, UserInformation, MessagesHolder, SenderContainer, MessageInput, MainBody } from './styles';

function Chat() {
  return(
      <Container>
          <MinimifiedOptions>
          </MinimifiedOptions>
          <Users></Users>
          <Main>
            <MainHeader>
              <SearchContainer>
                <SearchInput placeholder="Pesquise por usuários..."/>
              </SearchContainer>
              <UserInformation>aaaaaa</UserInformation>
            </MainHeader>
            <MainBody>
              <MessagesHolder>
              </MessagesHolder>
              <SenderContainer>
                <MessageInput placeholder="Enviar mensagem..."/>
              </SenderContainer>
            </MainBody>
          </Main>
      </Container>
  );
}

export default Chat;