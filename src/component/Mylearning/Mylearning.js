import React from 'react'
import './Mylearning.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Mylearning = () => {
  return (
    <>
      <Navbar />
      <h2 class="mjh" >My Learning</h2>
      <div className="card">
        <img src="../image/html.jpeg" alt=" " />
      </div>
      <p class="tu">
        <button class="btu" >
        <a href="/Coursed" >
        Learn More
          
        </a> </button>
      </p>
      <br></br>
      <div className="card">
        <img src="../image/html.jpeg" alt=" " />
      </div>
      <p class="tu" >
        <button class="btu" >
        <a href="/Coursed" >
        Learn More
          
        </a></button>
      </p>
      <br></br>
      <div className="card">
        <img src="../image/html.jpeg" alt=" " />
      </div>
      <p class="tu" >
        <button class="btu" ><a href="/Coursed" >
        Learn More
          
        </a></button>
      </p>
      <Footer />
    </>
  )
}

export default Mylearning
