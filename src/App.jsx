import { useEffect, useState } from 'react'
import axios from "axios";
import logo from './logo.svg'
import './App.css'
import UsersList from './Components/UsersList'
import UsersForm from './Components/UsersForm';

function App() {

    const [ users, setUsers ] = useState([])
    const [ userSelected, setUserSelected ] = useState(null)

    useEffect(() => {
      axios.get('https://users-crud1.herokuapp.com/users/')
        .then(res => setUsers(res.data));
    }, []);

    const getUsers = () => {
      axios
        .get('https://users-crud1.herokuapp.com/users/')
        .then((res) => setUsers(res.data));
    };

    const addUsers = (newUsers) => {
      alert("añadiendo")
      axios
        .post(`https://users-crud1.herokuapp.com/users/`, newUsers)
        .then(() => getUsers())
        .catch((error) => console.log(error.response));
    };

    const deleteUser = id => {
      axios
        .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getUsers());
    }

    const selectUser = (users) => {
      alert("seleccionando")
      setUserSelected(users)
    }

    const deselectUsers = () => setUserSelected(null);

    const updateUsers = (UsersUpdate) => {
      alert("Actualizando")
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${UsersUpdate.id}/`,
          UsersUpdate
        )
        .then(() => getUsers());
    };

    console.log(userSelected)

  return (
    <div className="App">
      <UsersList 
        addUsers={addUsers} 
        userSelected={userSelected}
        updateUsers={updateUsers}
        deselectUsers={deselectUsers}/>
      <UsersForm 
        users={users} 
        deleteUser={deleteUser}
        selectUser={selectUser}
      />
    </div>
  )
}

export default App
