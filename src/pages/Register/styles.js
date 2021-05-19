import styled from 'styled-components';
import background from '../../static/images/background-login.png';
import Tress from '../../static/images/Trees.jpeg';
import { Form } from '../../components/Form';


export const RightContainerRegister = styled.div`
  width: 50%;
  height: 100%;
  background: ${props => props.theme.default.background}
`;

export const InputsRegisterDiv = styled(Form)`
  top: 50%;
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 30%;

  h1{
    font-size: 3rem;
    font-weight: 300;
  }

  input {
    font-size: 1.3rem;
    width: 60%;
    padding: 30px;
    border-radius: 10px;
    background: ${props => props.theme.default.background};
    border: none;
    outline: none;
    font-family: "Oswald", sans-serif;
    font-weight: 300;
  }

  button{
        font-size: 1.5rem;
        width: 68%;
        height: 7%;
        margin-top: 10px;
        color: #ffffff;
        background: ${props => props.theme.default.secondary}
    }

    p{
        font-size: 1rem;
        font-family: arial;
    }
`;
