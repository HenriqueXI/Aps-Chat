import React from 'react';
import { Link } from 'react-router-dom'
import { Input } from '../../components/Form';
import { Background, Container, LeftContainer, RightContainer, Tress, InputDiv } from './styles';
import api from '../../api';

function Login() {

    const make_login = async (email, password) => {
        if(email && password){
            const jwt = await api.post('/users/login', { email, password });
            if(jwt.status == 200){
                return jwt;
            }
        }
    }

    const handle_login = ({ email, password }) => { 
        const jwt = make_login(email, password);
    }

    return(
        <Container>
            <LeftContainer>
                <Background/>
                <Tress/>
            </LeftContainer>
            <RightContainer>

                <InputDiv onSubmit={handle_login}>
                    <h1>Login</h1>
                    <Input type="text" name="email" placeholder="Nome"/>
                    <Input type="password" name="password" placeholder="Senha" />
                    <br/>
                    <button>Entrar</button>
                    <p>Não possui cadastro? <Link to='/register'>Cadastrar</Link></p>
                </InputDiv>

            </RightContainer>
        </Container>
    );
}

export default Login;
