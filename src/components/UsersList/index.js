import React, { useEffect, useState } from 'react';
import api from '../../api';

import { Container, Lista, Users, Avatar } from './styles';

function UsersList({ setActiveChat }) {

    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        api.get('/users/contacts', { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } }).then(users_list => {
            if(users_list.status == 200){
                setUsers(last_users => {
                    return [...users_list, ...last_users.data]
                });
            }
        })
    }, [])

    return(
        <Container>
            <Lista>
                {
                    users.length > 0
                    ? users.map(user => {return <Users onClick={() => setActiveChat(user)}>
                                                    <Avatar src={user.picture.url}/>
                                                    <p>{user.firstName}</p>
                                                </Users>})
                    : null
                }
            </Lista>
        </Container>
    );
}

export default UsersList;