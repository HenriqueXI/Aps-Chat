import React, { useEffect, useState } from 'react';
import api from '../../api';

import { Container, Lista, Users, Avatar } from './styles';

function UsersList() {

    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        api.get('/users', { headers: { Authorization: `JWT ${localStorage.getItem('jwt')}` } }).then(users_list => {
            setUsers(last_users => {
                return [...users_list, ...last_users]
            });
        })
    }, [])

    return(
        <Container>
            <Lista>
                {
                    users.length > 0
                    ? users.map(user => {return <Users>
                                                        <Avatar />
                                                        <p>{user}</p>
                                                </Users>})
                    : null
                }
            </Lista>
        </Container>
    );
}

export default UsersList;