import React, { useEffect, useState } from 'react';

const UsersList = ({ addUsers, userSelected, updateUsers, deselectUsers }) => {

    const [ first_name, setFirst_name ] = useState("");
    const [ last_name, setLast_name ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ birthday, setBirthday] = useState("")

    useEffect(() => {
        if(userSelected !== null){
            setFirst_name(userSelected.first_name);
            setLast_name(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday)
        } else{
            reset();
        }

    }, [userSelected])



    const submit = e => {
        e.preventDefault();
        const newUsers = {
            first_name,
            last_name,
            email,
            password,
            birthday
        }
        if(userSelected !== null){
            newUsers.id = userSelected.id
            updateUsers(newUsers);
            deselectUsers();
        }
        else{
            addUsers(newUsers)
            reset();
        }
        
    }

    const reset = () => {
        setFirst_name("");
        setLast_name("");
        setEmail("");
        setPassword("");
        setBirthday("")
    }

    return (
        <div className='input-card'>
            <form onSubmit={submit}>
                <h1>New User</h1>
                <div>
                    <label htmlFor="FirstName">First Name</label>
                    <input 
                        type="text" id='FirstName' 
                        onChange={e => setFirst_name(e.target.value)} 
                        value={first_name} />
                </div>

                <div>
                    <label htmlFor="LastName">Last Name</label>
                    <input 
                        type="text" id='LastName'
                        onChange={e => setLast_name(e.target.value)} 
                        value={last_name} />
                </div>

                <div>
                    <label htmlFor="Email">Email</label>
                    <input type="text" id='Email'
                     onChange={e => setEmail(e.target.value)} 
                     value={email}/>
                </div>

                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="password" id='Password'
                    onChange={e => setPassword(e.target.value)} 
                    value={password}/>
                </div>
                <div>
                    <label htmlFor="Birthday">Birthday</label>
                    <input type="date" id='Birthday'
                    onChange={e => setBirthday(e.target.value)} 
                    value={birthday}/>
                </div>
                <button> {userSelected !== null ? "Update" : "Create"}</button>
                {userSelected !== null && (
                    <button onClick={deselectUsers} type="button">
                        Clear
                    </button>
                )}
            </form>
        </div>
    );
};

export default UsersList;