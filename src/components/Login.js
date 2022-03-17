import React, { useEffect } from 'react';
import axios from 'axios';
function Login() {
 /* useEffect(() => {
    axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
    axios.post('/login', {
      email: "cherni@gmail.com",
      password: "rihab452",
    }, { withCredentials: true })
    .then(({ data }) => {
      if(data.status==="success"){
        console.log(data)
      } else {
        console.log("error")
      }
    });
  });*/
  return (
    <div className="Login"></div>
  );
}
export default Login;