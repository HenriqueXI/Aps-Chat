import React from 'react';

import { Container, Message } from './styles';

function MyMessage({ message }) {

    const has_attach = message.attachment ? true : false

    return(
        <Container>
            <Message>
                {has_attach && <img src={message.attachment.url} />}
                {message.text}
            </Message>
        </Container>
    );
}

export default MyMessage;