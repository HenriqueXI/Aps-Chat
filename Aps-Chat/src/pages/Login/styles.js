import styled from 'styled-components';
import background from '../../static/images/background-login.png'
import Trees from '../../static/images/Trees.jpeg'


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.default.background};

    display: flex;
    justify-content: center;
`;

export const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    background: ${props => props.theme.default.background};
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url(${background});
`;

export const Tress = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${Trees}) no-repeat;
  top: 20%;
  left: 25%;
`;

export const LeftContainer = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: ${props => props.theme.default.primary};
`;

export const InputDiv = styled.div`
    top: 50%;
    width: 100%;
    height: 100%;
    text-align: center;
    margin-top: 30%;

    h1{
        font-size: 3rem;
        font-weight: 300;

    }

    input{
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
        font-family: 'Times New Roman', Times, serif;
    }


`;
