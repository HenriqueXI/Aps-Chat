import React from 'react';
import { Link } from 'react-router-dom'
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
                    <p>Não possui cadastro? <Link to='/register'>Cadastrar</Link></p>
                </InputDiv>

            </RightContainer>
        </Container>
  );
}

export default Login;
