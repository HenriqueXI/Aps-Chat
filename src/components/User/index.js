import React, { useEffect, useState } from 'react';
import api from '../../api';

import { Container, Avatar, Users } from './styles';

function UsersList() {

    // useEffect(() => {
    //     api.get('')
    // }, [])

    return(
        <Container>
            <Avatar></Avatar>
            <p></p>
        </Container>
    );
}

export default UsersList;