import React, { useCallback, useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket'; 
import MyMessage from '../../components/MyMessage';
import TheirMessage from '../../components/TheirMessage';
import Mic from '@material-ui/icons/Mic';
import Stop from '@material-ui/icons/MicOff';

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

import useRecorder from '../../hooks/useRecorder';

function Chat() {
  
  let [audioBLOB, isRecording, startRecording, stopRecording] = useRecorder();
  const [socketUrl, setSocketUrl] = useState('wss://echo.websocket.org');
  const [messages, setMessages] = useState([]);
  const [activeChat, setActiveChat] = useState({});

  const {
    sendMessage,
    lastMessage,
    readyState,
  } = useWebSocket(socketUrl);

  useEffect(() => {
    if(activeChat){
      api.get(`/messages/users?email=${activeChat.email}`, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } }).then(newMessages => {
        if(newMessages.status == 200){
          setMessages(lastMessages => {
            return [...lastMessages, ...newMessages.data];
          });
        }
      });
    }
  }, [activeChat]);

  useEffect(() => {
    if(audioBLOB){
      console.log(audioBLOB)
    }
  }, [audioBLOB])

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];
    
  // const send_message = async ({ message }) => {
  //   const new_message = await api.post('/messages', { "text": message, "sender": JSON.parse(localStorage.getItem('user')).email, "recipient": activeChat.email }, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } });
  //   if(new_message.status == 200){
  //     setMessages(lastMessages => {return [...lastMessages, { "text": message, "sender": JSON.parse(localStorage.getItem('user')).email, "recipient": activeChat.email }]});
  //   }
  // };

  const handleClickSendMessage = useCallback(({ message }) => {
    if(readyState !== ReadyState.OPEN){
      sendMessage(message);
    }
  }, []);

  // const handle_send_message = useCallback(async ({ message }) => {
  //   await send_message(message);
  // }, [])

  const handle_search = ({ search }) => {
    console.log(search);
  }

  return(
      <Container>
          <MinimifiedOptions></MinimifiedOptions>
          <Users>
            <UsersList setChat={setActiveChat} />
          </Users>
          <Main>
            <MainHeader>
              <SearchContainer onSubmit={handle_search}>
                <SearchInput name={"search"} placeholder="Pesquise por usuários..."/>
              </SearchContainer>
              <UserInformation>
                  <User user={activeChat} />
              </UserInformation>
            </MainHeader>
            <MainBody>
              <MessagesHolder>
                {
                  messages.length > 0
                  ? messages.map(message => { 
                      return JSON.parse(localStorage.getItem('user')).email === message.sender.email
                              ? <TheirMessage message={message} />  
                              : <MyMessage message={message}/>                 
                    })
                  : null
                }
              </MessagesHolder>
              <SenderContainer onSubmit={handleClickSendMessage}>
                <MessageInput name={"message"} placeholder="Enviar mensagem..."/>
                {!isRecording ? <Mic onClick={startRecording}/> : <Stop onClick={stopRecording} />}
              </SenderContainer>
            </MainBody>
          </Main>
      </Container>
  );
}

export default Chat;