import React from 'react';

const UsersForm = ({users, deleteUser, selectUser}) => {
    return (
        <ul>{
                users.map((users) => (
                    <div className='input-list'>
                        <li key={users.id}>
                            <h3>{users.first_name} {users.last_name}</h3>
                            <h5>{users.email}</h5>
                            <h5>{users.birthday}</h5>
                            <button onClick={() => deleteUser(users.id)}>Clear</button>
                            <button onClick={() => selectUser(users)}>Edit</button>
                        </li>
                    </div>
                ))
            }
        </ul>
    );
};

export default UsersForm;