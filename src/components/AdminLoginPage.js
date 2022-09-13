import React from 'react'
import {Link} from "react-router-dom";

function AdminLoginPage() {
    const userName =JSON.parse(localStorage.getItem("username"));
    const userEmail = JSON.parse(localStorage.getItem("email"));
    
  return (
    <div className='WelcomePage-div'>
        <div className='user-details'>
            <h1>UserDetails</h1>
            <div className='user-name'>
            {userName.map((name) => {
                return (<div><h4>
                  Name :{name}
                </h4>
                </div>)})}
                </div>
                <div className='user-name'>
               {userEmail.map((email) => {
                return (<div className='user-name'><h4>
                  Email :{email}
                </h4>
                </div>)})}
                </div>
        </div>
        <Link className="nav-link " to="/">
                Logout{" "}
              </Link>
    </div>
  )
}

export default AdminLoginPage