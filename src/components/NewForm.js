import React,{useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './NewForm.css';
import LoginPage from './LoginPage';

function NewForm() {    
    const [popUp, setpopUp] = useState(false);    
    const handleClickOpen=()=>{
        setpopUp(!popUp);
    }

  const [username, setname] = useState([]);
  const [email, setemail] = useState([]);
  const [password, setpassword] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (username === "") {
        alert("Name Is Required");
      } else if (email === "") {
        alert("Email Is Required");
      } else if (password === "") {
        alert("Password is Required");
      } else {
        var name_data=JSON.parse(localStorage.getItem('username')|| "[]");
        name_data.push(username)
        localStorage.setItem("username", JSON.stringify(name_data));
        var email_data=JSON.parse(localStorage.getItem('email')|| "[]");
        email_data.push(email)
          localStorage.setItem("email", JSON.stringify(email_data));
          var password_data=JSON.parse(localStorage.getItem('password')|| "[]");
        password_data.push(password)
          localStorage.setItem("password", JSON.stringify(password_data));
        alert("User Saved!");
        setpopUp(true);
      }
    };

    return (
    <div>
    <div className='container'>
        <div className='forms-container'>
             <div className='panels-container'>
            <div className='panel left-panel'>
                <div className='content'>
                    {popUp?
                    <div><h3>New Here?</h3>
                    <p>
                        Please Click Below to SignUp 
                    </p></div>:<div><h3>Already registered</h3>
                    <p>
                        Please Click Below to LogIn
                    </p></div>}
                    <button onClick={handleClickOpen} className='btn transparent'>{popUp?<h4>SIGNUP</h4>:<h4>LOGIN</h4>}</button>
                 </div>
            </div>
        
          
            </div>
        
        {popUp ?
          <LoginPage/>:<div className='signin-signup'>
    <form className='sign-up-form'>
    <h2 className='title'>SignUp</h2>
      <div className='input-field'>
        <i className='fa fa-user'></i>
        <input type='text' value={username}
                onChange={(e) => setname(e.target.value)}  id="exampleInputName" placeholder='Username' />
      </div>
      <div className='input-field'>
        <i className='fa fa-envelope'></i>
        <input type='email'  value={email}
                onChange={(e) => setemail(e.target.value)}
                id="exampleInputEmail1" placeholder='Email' />
      </div>
      <div className='input-field'>
        <i className='fa fa-lock'></i>
        <input type='password' value={password}
                onChange={(e) => setpassword(e.target.value)}  id="exampleInputPassword1" placeholder='Password' />
      </div>
      <button className='btn solid' onClick={handleSubmit} >SignUP</button>
      <p className='social-text'>Or Sign Up with social platforms</p>
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
  </div>}
         
        </div>
      </div>
    </div>
  )
}

export default NewForm