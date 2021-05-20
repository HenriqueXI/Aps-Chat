import React from 'react'
import { RightContainerRegister, InputsRegisterDiv } from './styles'
import { Background, Container, LeftContainer, Tress } from '../Login/styles';
import { Link } from 'react-router-dom'
import { Input } from '../../components/Form';
import api from '../../api';

function Register({ history }) {

  const handle_register = async ({ name, email, password, last_name }) => {
    const jwt = await api.post('/users', {"firstName": name, "lastName": last_name, email, password})
    if(jwt.status == 200){
      return jwt.data;
    }
    history.push({
      pathname: `/chat`
    });
  }

  return(
    <Container>
      <LeftContainer>
        <Background></Background>
        <Tress></Tress>
      </LeftContainer>
      <RightContainerRegister>

        <InputsRegisterDiv onSubmit={handle_register}>
          <h1>Register</h1>
          <Input type="text" name="name" placeholder="Nome" />
          <Input type="text" name="last_name" placeholder="Sobrenome" />
          <Input type="text" name="email" placeholder="email" />
          <Input type="password" name="password" placeholder="Senha" />
          <button>Cadastrar</button>
          <p>Já possui cadastro? <Link to="/">Login</Link></p>
        </InputsRegisterDiv>

      </RightContainerRegister>
    </Container>
  );
}

export default Register;
