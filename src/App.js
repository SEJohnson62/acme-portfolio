import React, { useState, useEffect } from 'react';
import qs from 'qs';
import './App.css';
import {fetchUser, fetchNotes, fetchVacations, fetchFollowingCompanies} from './api.js';
import Nav from './Nav.js';
import Notes from './Notes.js';
import Vacations from './Vacations.js';
import FollowingCompanies from './FollowingCompanies.js';

function App() {

  const getHash = ()=> {
    return window.location.hash.slice(1);
  }
  const [ params, setParams ] = useState(qs.parse(getHash()));

  useEffect(()=> {
    window.addEventListener('hashchange', ()=> {
      setParams(qs.parse(getHash()));
    });
    setParams(qs.parse(getHash()));
  }, []);

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
    if ( user.id ) {
      Promise.all([ fetchNotes(user.id), fetchVacations(user.id), fetchFollowingCompanies(user.id) ])
      .then (([_notes, _vacations, _followingCompanies]) => {
        setNotes( _notes );
        setVacations( _vacations );
        setFollowingCompanies( _followingCompanies )
      });
    }

  }, [user]);

  const changeUser = () => {
    window.localStorage.removeItem('userId');
    fetchAndSetUser();
  }

  const { view } = params;

return (
  <div className="App">
    <header>
    <a href='#'><img src={user.avatar}/></a>
     <h2>Welcome {user.email}</h2>
     <button onClick={changeUser}>Switch User</button>
    </header>
    <Nav
      view = { view }
      notes = { notes }
      vacations = { vacations }
      companies = { followingCompanies }
    />

    <main>
        { view === 'notes' && <Notes notes={ notes }/>}

        { view === 'vacations' && <Vacations vacations={ vacations }/>}

        { view === 'followingCompanies' && <FollowingCompanies followingCompanies={ followingCompanies }/>}
    </main>

  </div>
);
}

export default App;
