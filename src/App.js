import React, { useState, useEffect } from 'react';
import './App.css';
import {fetchUser, fetchNotes, fetchVacations, fetchFollowingCompanies} from './api.js';

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


  const fetchAndSetUser = () => {
    fetchUser()
    .then( user => setUser(user));
  }
  useEffect(()=> {
    fetchAndSetUser()
  }, []);

  const [notes, setNotes] = useState([]);
  const [vacations, setVacations] = useState([]);
  const [followingCompanies, setFollowingCompanies] = useState([]);

  useEffect(() => {
    console.log("In useEffect: User id: ", user.id);
    console.log(user);
    if ( user.id ) {
      Promise.all([ fetchNotes(user.id), fetchVacations(user.id), fetchFollowingCompanies(user.id) ])
      .then (([_notes, _vacations, _followingCompanies]) => {
        setNotes( _notes );
        setVacations( _vacations );
        setFollowingCompanies( _followingCompanies )
      });
    }

  }, [user.id]);

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
    <body>
      <h2>{notes.length} Notes</h2>
      <div></div>
      <h2>{vacations.length} Vacations</h2>
      <div></div>
      <h2>{followingCompanies.length} Following Companies</h2>
      <div></div>
    </body>
  </div>
);
}
/*
<ul>
        {
          notes.map( note => {
            return `
              <li>
                ${ note.text }
                <button data-id='${note.id}'>X</button>
              </li>
            `;
          }).join('')
        }
        </ul>
        */
export default App;
