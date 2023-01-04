import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Suscribe.css'

const Suscribe = () => {
  return (
    <>
      <Navbar />
      <h1>Introducing Finno</h1>
      <p class="ku" >Your All in one learning subscription</p>
      <div className="card">
        <img src="../image/html.jpeg" alt=" " />
      </div>
     
      <br></br>
      <div className="card">
        <img src="../image/html.jpeg" alt=" " />
      </div>
     
      <br></br>
      <div className="card">
        <img src="../image/html.jpeg" alt=" " />
      </div>
      <p class="tu" >
        <button class="btr" >Learn More </button>
      </p>
      <Footer />
    </>
  )
}

export default Suscribe
