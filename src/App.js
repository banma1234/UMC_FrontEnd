import { React } from 'react';
import Router from './utils/routes/router';
import axios from 'axios';

// axios.defaults.withCredentials = true;

const TIME_OUT = 60 * 60 * 1000;

const refreshLogin = () => {
  const token = localStorage.getItem("token");
  if(!token)  return;

  axios.get('http://localhost:8080/users', token)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => { console.log(err) });
}

function App() {
  setTimeout(refreshLogin(), TIME_OUT);
  return (
    <>
    <div className="App">
    </div>
    <Router/>
    </>
  );
}

export default App;
