import react from 'react'
import './Mylearn.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import one from './image/one.jpg'
import two from './image/two.jpg'
import three from './image/three.jpg'
import four from './image/four.jpg'
const Mylearn = () => {
  return (
    <>
      <Navbar />

      <div>
        <div className="myheader" id="myHeader">
          <h1>All Courses</h1>{' '}
        </div>
        <div id="btno">
          {' '}
          <button className="btno active" onclick="one()">
          <a href="/Coursed" >
          Trading
        </a>
          </button>
          <button className="btno" onclick="two()">
          <a href="/Coursed" >
          Investing
        </a>
          </button>
          <button className="btno" onclick="three()">
          <a href="/Coursed" >
          Business
        </a>
           
          </button>
          <button className="btno" onclick="four()">
          <a href="/Coursed" >
          Web Development
        </a>
            
          </button>
        </div>
        <div className="row">
          <div className="column">
            <a href="/Coursed">
              <img src={one} alt="" />
            </a>
            <a href="/Coursed">
            <img src={two} alt="" />
            </a>
            <a href="/Coursed">
            <img src={three} alt="" />
            </a>
            <a href="/Coursed">
            <img src={four} alt="" />
            </a>
          </div>
          <div className="column">
            <a href="/Coursed">
            <img src={one} alt="" /></a>
            <img src={two} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" />
          </div>
          <div className="column">
            <a href="/Coursed">
              <img src={one} alt="" />
            </a>

            <img src={two} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" />
          </div>
          <div className="column">
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Mylearn
