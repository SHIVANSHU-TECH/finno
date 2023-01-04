import react from "react";
import "../Course/Coursed.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Coursed=() => {
  return (
    <div>
        <Navbar/>
      <div className="containers">
        <div className="box1">
          eleifend leo. Vestibulum ut augue dignissim, pretium mauris ut,
          viverra lacus. Suspendisse eu porttitor justo. Aliquam posuere sit
          amet dolor ac fringilla. Donec lorem diam, convallis eu eros eget,
          congue porta nibh. Aliquam eros est, viverra ut pretium quis,
          tincidunt vitae felis. Mauris id sagittis risus.
        </div>
        <div className="box2">
          <h3>Learn Volume Indicators</h3>
          <h6 id="left">beginners. English </h6>
          <h6 className="right">share</h6>
          <br />
          <div className="smallbox" />
          <div className="maincontent">
            <h4>
              <b>1.importance of volume analysis</b>
            </h4>
            <h5>importance of volume</h5>
            <h5>importance of mfi</h5>
            <h5>trading with mfi</h5>
            <h4>
              <b>2.On balance volume</b>
            </h4>
            <h5>introduction to obv</h5>
            <h5>trading with obv</h5>
            <h4>
              <b>3.Vmap</b>
            </h4>
            <h5>introduction to Vmap</h5>
            <h5>trading to Vmap</h5>
          </div>
        </div>
        <div className="box3">
          <h1>About course</h1>
          <p className="cont">
            Aliquam posuere sit amet dolor ac fringilla. Donec lorem diam,
            convallis eu eros eget
          </p>
          <br />
          <br />
          <div className="contents">
            <h2>Difficulty</h2>
            <br />
            <h2>Language</h2>
            <br />
            <h2>Duration</h2>
            <br />
          </div>
          <div className="nextcontent">
            <br />
            <h6>beginner</h6>
            <br />
            <br />
            <h6>English</h6>
            <br />
            <h6>0 hr 59min</h6>
            <br />
          </div>{" "}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="text">
            <h2>what you will learn</h2>
            <p>
              1.role of volume analysis <br />
              2.trading with mfi Indicator <br />
              3.taking trades on balance volume <br />
              4.how institutional traders use vmap <br />
            </p>
          </div>
        </div>
        <div className="box4">
          <h1>Meet your mentor</h1>
          <img src="images/download (5).jpg" alt="" />
          <div className="para">
            <p>
              1.Aliquam posuere sit amet dolor ac . <br />
              2. Aliquam eros est, viverra ut pretium <br />
              3.tincidunt vitae felis. Mauris id sagit. <br />
              4.Aenean ut variuselit, at maximus. <br />
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
   
  );
}
export default Coursed;