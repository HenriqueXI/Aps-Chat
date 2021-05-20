import React from 'react';

import { Container, Message } from './styles';

function MyMessage({ message }) {
  return(
        <Container>
            <Message>
                {message}
            </Message>
        </Container>
    );
}

export default MyMessage;