import styled from 'styled-components';
import background from '../../static/images/background-login.png'


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
    background-position: cover;
`;

export const LeftContainer = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: ${props => props.theme.default.primary};
`;