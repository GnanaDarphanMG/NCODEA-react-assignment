import React from 'react'
import './WelcomePage.css'
import {Link} from "react-router-dom";

function Welcome() {

  return (<div className='WelcomePage-div'><div className='new-Welcome-page'>
  <h1>Welcome</h1>
  <Link className="nav-link " to="/">
                Logout{" "}
              </Link></div>
  </div>
  )
}

export default Welcome