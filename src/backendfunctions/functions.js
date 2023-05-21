import axios from 'axios';

export const signup = (data) => {
    axios.post(`http://localhost:5000/notes/signup`, data)
      .then(console.log('USER ADDED'))
      .catch((error) => console.log(error));
};  

export const signin = (data) => {
  axios.post(`http://localhost:5000/notes/signin`, data)
    .then()
    .catch((error) => console.log(error));
};  