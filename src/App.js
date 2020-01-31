import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
const API = 'https://acme-users-api-rev.herokuapp.com/api';

function App() {
  const [user, setUser] = useState({fullName: "",
                                    id: "",
                                    firstName: "",
                                    lastName: "",
                                    middleName: "",
                                    email: "",
                                    title: "",
                                    avatar: "",
                                    createdAt: "",
                                    updatedAt: "",
                                    companyId: ""
                                    });

  const fetchUser = async ()=> {
    const storage = window.localStorage;
    const userId = storage.getItem('userId');
    if(userId){
      try {
        return (await axios.get(`${API}/users/detail/${userId}`)).data;
      }
      catch(ex){
        storage.removeItem('userId');
        return fetchUser();
      }
    }
    const user = (await axios.get(`${API}/users/random`)).data;
    storage.setItem('userId', user.id);
    return user;
  };
  const fetchAndSetUser = () => {
    fetchUser()
    .then( user => setUser(user));
  }
  useEffect(()=> {
    fetchAndSetUser()
  }, []);

  const changeUser = () => {
    window.localStorage.removeItem('userId');
    fetchAndSetUser();
  }
return (
  <div className="App">
    <header>
    <img src={user.avatar}/>
     <h2>Welcome {user.email}</h2>
     <button onClick={changeUser}>Switch User</button>
    </header>
  </div>
);
}
export default App;
