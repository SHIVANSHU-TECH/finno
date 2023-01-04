import React from "react";
import ReactDOM from 'react-dom/client';
import "../Login/Login.css";
import blank from "../Login/blank.jpeg"

const Login=() =>{
    return(
        <>
       

          <section className="login" class="gyh">
            <div className="Container">
                <div className="signin-content">
                  <div className="signin-form">
                  <img  class="profile" src={blank} /> <br/>
                    <h2 className="Form-title">Login to finno</h2><br/>
                    <form className="login-form" id="login-form">
                        <div className="form-group">
                            <h4 class="qsd" >Email</h4>
                            <label htmlFor="email">
                            <i class="zmdi zmdi-email material-icons-name"></i>
                            </label>
                            <input type="email" name="email" id="email" autoComplete="off" placeholder="enter Your email"
                                />
                        </div>
                        <div className="form-group">
                        <h4 class="qsd" >password</h4>
                            <label htmlFor="password">
                            <i class="zmdi zmdi-lock material-icons-name"></i>
                            </label>
                            <input type="password" name="password" id="password" autoComplete="off" placeholder=" Enter Your password"
                                />
                        </div>
                        <div >
                          <a href="/Home"> <button type="button" class="custom-btn btl">Sign In</button></a>
                        
                        </div> 
                        <div className="sxt">
                          <h5>Don't have an account?</h5>
                        </div>
                        <div >
                       <a href="/Signup"><button type="button" class="custom-btn btl">Sign Up</button></a>
                        
                          <hr />
                        </div>
                        <div className="login_icons">
                          
                        </div>
                    </form>
                  </div>
                </div>
            </div>
          </section>

       
        </>
    )
}
  
export default Login;