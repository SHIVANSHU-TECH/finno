import React from 'react'
import Mylearning from "../Mylearning/Mylearning"
import "../Mylearning/Mylearning.css"
import Suscribe from "../Suscribe/Suscribe"
import "../Suscribe/Suscribe.css"
import Mylearn from '../Mylearning/Mylearning'
import login from '../Login/Login'
import "../Login/Login.css"

const Navbar = () => {
  return (
    <>
    <header className="header">
    <a href="/Home" className="logo">
        <img src="/imga/logo.png" alt="" />
      </a>
      <hr class="new1"/>
      <nav className="navbar">
      
        
        <a href="/mylearn" >
          Learn
        </a>
        <a href="/Mylearning" >
          MyLearning
        </a>
        <a href="/Suscribe">
        <button>subscribe</button>
        </a>
        <a href="/Login">
        <button>login</button>
        </a>
      </nav>
      <div className="icons">
        <div className="fas fa-bars" id="menu-btn" />
      </div>
    </header>
    </>
  )
}

export default Navbar