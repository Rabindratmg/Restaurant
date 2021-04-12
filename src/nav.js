import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const NavBar =()=>{

     return(  
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/"><img
          src="http://www.niteshkumarsapkota.com.np/restro/momo.png"
          alt="logo"
          height="50px"
          width="50px"
        /></a>
      <a className="navbar-brand" style={{color:"blueviolet"}}
        href="/"><b className="m-f">Kshitiz Cafe</b></a
      >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
        <div className="nav-block">
          <Link className="nav-link my-2 my-sm-0" to="/"
            ><span className="fa fa-home"></span>Home
          </Link>
        </div>
        <div className="nav-block">
          <Link className="nav-link my-2 my-sm-0" to='/AboutUs'
            ><span className="fa fa-users"></span>About Us</Link>
        </div>
        <div className="nav-block">
          <Link className="nav-link my-2 my-sm-0" to="/Gallery"
            ><span className="fa fa-user"></span>Gallery</Link>
        </div>
        <div className="nav-block">
          <Link className="nav-link my-2 my-sm-0" to="/ContactUs"
            ><i className="fa fa-phone"></i>Contact Us
            </Link>
        </div>
        <div className="nav-block">
          <Link className="nav-link my-2 my-sm-0" to="/OnlineOrder" 
            ><i className="fa fa-poll-h"></i>Menu
            </Link>
        </div>
        <div className="nav-block">
          <Link className="nav-link my-2 my-sm-0" to="/cart"
            ><i className="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>Cart
            </Link>
        </div>
      </div>
    </nav>
  </header>
             )

}
export default NavBar;