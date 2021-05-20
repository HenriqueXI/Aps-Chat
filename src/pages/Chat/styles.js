import styled from 'styled-components';
import { Input, Form } from '../../components/Form';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const MinimifiedOptions = styled.aside`
    width: 100%;
    max-width: 60px;
    height: 100%;
    background: ${props => props.theme.default.secondary};
`;

export const Users = styled.div`
    width: 100%;
    max-width: 15rem;
    height: 100%;
    background: ${props => props.theme.default.primary};
`;

export const Main = styled.main`
    width: 100%;
    height: 100%;
    background: ${props => props.theme.default.background};
`;

export const MainHeader = styled.div`
    width: 100%;
    height: 15%;
    background: blue;
    display: flex;
    flex-direction: column;
`;

export const SearchContainer = styled(Form)`
    width: 100%;
    height: 60px;
    background: ${props => props.theme.default.search.background};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 6px rgba(0, 0, 0, .1);
    position: relative;
    z-index: 3;
`;

export const SearchInput = styled(Input)`
    border: none;
    border-radius: 8px;
    background: ${props => props.theme.default.background};
    padding: 10px;
    width: 100%;
    max-width: 80rem;
    height: 30px;
`;

export const UserInformation = styled.div`
    width: 100%;
    height: 90px;
    background: ${props => props.theme.default.search.background};
`;

export const MainBody = styled.div`
    width: 100%;
    height: 85%;
    position: relative;
`;

export const MessagesHolder = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
    padding: 20px 0px;
`;

export const SenderContainer = styled(Form)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    width: 100%;
    align-items: center;
`;

export const MessageInput = styled(Input)`
    width: 80%;
    height: 20px;
    background: ${props => props.theme.default.search.background};
    border: none;
    border-radius: 8px;
    padding: 10px;
`;


