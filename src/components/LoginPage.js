import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import './NewForm.css';

function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //getting email password
  const userName =JSON.parse(localStorage.getItem("username"));
  const userPassword = JSON.parse(localStorage.getItem("password"));
 
  //submit function
  const handleSubmit = (e) => {
   
    e.preventDefault();
    if (userName.includes(username) && userPassword.includes(password)) {
      alert("Login Success");
      navigate("/welcome");
    } 
   else if (username === "admin" && password === "admin") {
      alert("Login Success");
      navigate("/adminpage");
    } else {
      alert("Invalid Email OR password");
    }
  };
  return (
    <div><div className='signin-signup'>
    <form className='sign-in-form'>
    <h2 className='title'>SignIn</h2>
      <div className='input-field'>
        <i className='fa fa-user'></i>
        <input type='text' className="form-control"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              id="exampleInputEmail1" placeholder='Username' />
      </div>
      <div className='input-field'>
        <i className='fa fa-lock'></i>
        <input type='password' value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword1" placeholder='Password' />
      </div>
      <button className='btn solid' onClick={handleSubmit}>LogIN</button>
      <p className='social-text'>Or Sign in with social platforms</p>
      <div className='social-media'>
        <a href='/home' className='social-icon'> 
         <i className='fa fa-facebook-f'></i> 
        </a>
        <a href='/home' className='social-icon'> 
         <i className='fa fa-twitter'></i> 
        </a>
        <a href='/home' className='social-icon'> 
         <i className='fa fa-google'></i> 
        </a>
        <a href='/home' className='social-icon'> 
         <i className='fa fa-linkedin'></i> 
        </a>
      </div>              
      </form>
  </div></div>
  )
}

export default LoginPage