import React, { useEffect, useState } from 'react';
import api from '../../api';

import { Container, Avatar, Users } from './styles';

function UsersList({ user }) {

    return(
        <Container>
            <Avatar src={user?.picture?.url}/>
            <p>{user.firstName}</p>
        </Container>
    );
}

export default UsersList;