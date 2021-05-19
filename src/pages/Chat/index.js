import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import { 
  Container, 
  Main, 
  MinimifiedOptions, 
  Users, 
  SearchContainer, 
  SearchInput, 
  MainHeader, 
  UserInformation, 
  MessagesHolder, 
  SenderContainer, 
  MessageInput, 
  MainBody 
} from './styles';

import UsersList from '../../components/UsersList';
import User from '../../components/User';
import api from '../../api';

function Chat() {
  
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api.get('/messages/users?email=richard.filho@seberino.com.br').then(newMessages => {
      setMessages(lastMessages => {
        return [...lastMessages, ...newMessages];
      });
    });
  }, [])
    
  const send_message = ({ message }) => {
    // const new_message = await api.post('/messages', { "text": message, "sender": "", "recipient": "" });
    // if(new_message.status == 200){
    //   return new_message;
    // }
    console.log(message)
    
  };

  const handle_send_message = useCallback(({ message }) => {
    // sendMessage(message)
    console.log(message);
    setMessages(lastMessages => {return [...lastMessages, message]});
  }, [])

  const handle_search = ({ search }) => {
    console.log(search);
  }

  return(
      <Container>
          <MinimifiedOptions></MinimifiedOptions>
          <Users>
            <UsersList />
          </Users>
          <Main>
            <MainHeader>
              <SearchContainer onSubmit={handle_search}>
                <SearchInput name={"search"} placeholder="Pesquise por usuários..."/>
              </SearchContainer>
              <UserInformation>
                  <User/>
              </UserInformation>
            </MainHeader>
            <MainBody>
              <MessagesHolder>
                {
                  messages.length > 0
                  ? messages.map(message => { return <div>{message}</div> })
                  : null
                }
              </MessagesHolder>
              <SenderContainer onSubmit={handle_send_message}>
                <MessageInput name={"message"} placeholder="Enviar mensagem..."/>
              </SenderContainer>
            </MainBody>
          </Main>
      </Container>
  );
}

export default Chat;