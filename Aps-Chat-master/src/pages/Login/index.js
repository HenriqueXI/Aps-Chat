import React from 'react';

import { Background, Container, LeftContainer, RightContainer, Tress, InputDiv } from './styles';

function Login() {
  return(
        <Container>
            <LeftContainer>
                <Background/>
                <Tress/>
            </LeftContainer>
            <RightContainer>

                <InputDiv>
                    <h1>Login</h1>
                    <input type="text" name="Nome de usuario" placeholder="Nome"/>
                    <input type="password" name="Senha" placeholder="Senha" />
                    <br/>
                    <button>Entrar</button>
                </InputDiv>

            </RightContainer>
        </Container>
  );
}

export default Login;
