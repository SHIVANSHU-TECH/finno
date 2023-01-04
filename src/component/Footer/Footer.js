import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="footer">
    <div className="box-container">
      <div className="box">
        &lt;<h4>contact info</h4>
        <p>
          {" "}
          <i className="fas fa-map-marker-alt" /> delhi, india 400104.{" "}
        </p>
        <p>
          {" "}
          <i className="fas fa-envelope" /> example@gmail.com{" "}
        </p>
        <p>
          {" "}
          <i className="fas fa-phone" /> +123-456-7890{" "}
        </p>
        <a href="#">India</a>
      </div>
      <div className="box">
        <h4>EXPLORE</h4>
        <a href="#">home</a>
        <a href="#">about</a>
        <a href="#">course</a>
        <a href="#">blog</a>
        <a href="#">contact</a>
        
      </div>
      
      <div className="box">
        <h4>category</h4>
        <a href="#">Design</a>
        <a href="#">Developer</a>
        <a href="#">Marketing</a>
        <a href="#">Business</a>
        <a href="#">Lifestyle</a>
        <a href="#">Photography</a>
        <a href="#">Music</a>
      </div>
      <div className="box">
        <h4>subscribe</h4>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          quasi voluptates ad esse perferendis, ex molestiae earum ullam
          repellendus sint, di ea?
        </h5>
        <div className="inputBox">
          <input type="email" placeholder="email" />
        </div>
        <a href="/Suscribe"><button>subscribe here</button></a>
        
      </div>
    </div>
  </div>
  </>
  )
}

export default Footer