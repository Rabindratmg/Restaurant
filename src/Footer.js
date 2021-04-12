import React from "react";
import "./footer.css";

const Footer=()=>{
    return (
        <>
        <br/>
        <br/>
        <hr></hr>
        <footer>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 text-center text-md-left">
          <div className="py-0">
            <h3 className="my-4 text-white">
              About<span className="mx-2 m-f" style={{color: "blueviolet"}}
                >Kshitiz Cafe</span>
            </h3>
  
            <p className="footer-links font-weight-bold">
              <a className="text-white" href="/">Home</a>
              |
              <a className="text-white" href="/OnlineOrder">Menu</a>
              |
              <a className="text-white" href="/AboutUs">About</a>
              |
              <a className="text-white" href="/ContactUs">Contact</a>
            </p>
            <p className="text-light py-4 mb-4">&copy;2021 ISquare Innovations</p>
          </div>
        </div>
  
        <div className="col-md-4 text-white text-center text-md-left">
          <div className="py-2 my-4">
            <div>
              <p className="text-white">
                <i className="fa fa-map-marker mx-2"></i>
                koteshwor - Kathmandu, Chabhil , Kathmandu
              </p>
            </div>
  
            <div>
              <p>
                <i className="fa fa-phone mx-2"></i> +977 9843804998 , +977 981377852
              </p>
            </div>
            <div>
              <p>
                <i className="fa fa-envelope mx-2"></i
                ><a href="mailto:restromandu@gmail.com">restromandu@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
  
        <div className="col-md-4 text-white my-4 text-center text-md-left">
          <span className="font-weight-bold">About the Cafe</span>
          <p className="text-warning my-2">
            We guide customers to have the better food from good and the nearest
            restaurants and feature them with their vlogs.
          </p>
          <div className="py-2">
            <a href="https://www.facebook.com" target="blank"
              ><i className="fab fa-facebook fa-2x text-primary mx-3"></i
            ></a>
            <a href="https://www.instagram.com"  target="blank"
              ><i className="fab fa-instagram fa-2x text-danger mx-3"></i
            ></a>
            <a href="https://www.linkedin.com" target="blank"><i className="fab fa-linkedin fa-2x text-info mx-3"></i></a>
            <a href="https://www.youtube.com" target="blank"><i className="fab fa-youtube fa-2x text-danger mx-3"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </>
    )
}
export default Footer;