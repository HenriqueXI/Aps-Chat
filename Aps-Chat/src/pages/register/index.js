import React from 'react'
import { RightContainerRegister, InputsRegisterDiv } from './style'
import { Background, Container, LeftContainer, Tress } from '../Login/styles';
import { Link } from 'react-router-dom'

function Register() {
  return(
    <Container>
      <LeftContainer>
        <Background></Background>
        <Tress></Tress>
      </LeftContainer>
      <RightContainerRegister>

        <InputsRegisterDiv>
          <h1>Register</h1>
          <input type="text" name="name" placeholder="Nome" />
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="Senha" />
          <button>Cadastrar</button>
          <p>Já possui cadastro? <Link to="/">Login</Link></p>
        </InputsRegisterDiv>

      </RightContainerRegister>
    </Container>
  );
}

export default Register;
