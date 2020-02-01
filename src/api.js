import axios from 'axios';

const API = 'https://acme-users-api-rev.herokuapp.com/api';

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

const fetchNotes = async (userId) => {
  let notes = [];
  const response =
    await axios.get(`${API}/users/${userId}/notes`);
  notes = response.data;
  console.log(notes);
  return notes;
}
const fetchVacations = async (userId) => {
  let vacations = [];
  const response =
    await axios.get(`${API}/users/${userId}/vacations`);
  vacations = response.data;
  console.log( vacations );
  return vacations;
}
const fetchFollowingCompanies = async (userId) => {
  let companies = [];
  const response =
    await axios.get(`${API}/users/${userId}/followingCompanies`);
  companies = response.data;
  console.log( companies );
  return companies;
}

export {fetchUser, fetchVacations, fetchNotes, fetchFollowingCompanies};
