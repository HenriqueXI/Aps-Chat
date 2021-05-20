import React, { useCallback, useState, useEffect } from 'react';
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
  const [messages, setMessages] = useState([{"user_name": "alexandre", "text": "teste"}, 
                                            {"user_name": "richard", "text": "teste3"},
                                            {"user_name": "richard", "text": "teste3324"},
                                            {"user_name": "alexandre", "text": "teste234234"},
                                            {"user_name": "richard", "text": "te"},
                                            {"user_name": "alexandre", "text": "tee3"},
                                            {"user_name": "richard", "text": "te343423ste3"},
                                          ]);

  useEffect(() => {
    api.get('/messages/users?email=', { headers: { Authorization: `JWT ${localStorage.getItem('jwt')}` } }).then(newMessages => {
      setMessages(lastMessages => {
        return [...lastMessages, ...newMessages];
      });
    });
  }, [])

  useEffect(() => {
    if(audioBLOB){
      console.log(audioBLOB)
    }
  }, [audioBLOB])
    
  const send_message = async ({ message }) => {
    const new_message = await api.post('/messages', { "text": message, "sender": "", "recipient": "" }, { headers: { Authorization: `JWT ${localStorage.getItem('jwt')}` } });
    if(new_message.status == 200){
      console.log(message);
      setMessages(lastMessages => {return [...lastMessages, {"user_name": localStorage.getItem('user'), "text": message}]});
    }
    
  };

  const handle_send_message = useCallback(async ({ message }) => {
    await send_message(message);
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
                  ? messages.map(message => { 
                      return localStorage.getItem('user') === message.user_name
                              ? <TheirMessage message={message.text} />  
                              : <MyMessage message={message.text}/>                 
                    })
                  : null
                }
              </MessagesHolder>
              <SenderContainer onSubmit={handle_send_message}>
                <MessageInput name={"message"} placeholder="Enviar mensagem..."/>
                {!isRecording ? <Mic onClick={startRecording}/> : <Stop onClick={stopRecording} />}
              </SenderContainer>
            </MainBody>
          </Main>
      </Container>
  );
}

export default Chat;