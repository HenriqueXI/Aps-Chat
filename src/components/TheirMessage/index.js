import React from 'react';

import { Container, Message } from './styles';

function TheirMessage({ message }) {
  return(
        <Container>
            <Message>
                {message}
            </Message>
        </Container>
    );
}

export default TheirMessage;