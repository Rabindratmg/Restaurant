import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const NavBar =()=>{

     return(  
                 <div className="NavBar">
                    <ul>
                        
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/AboutUs"><li>About us</li></Link>
                            <Link to="/Gallery"><li>Gallery</li></Link>
                            <Link to="/ContactUs"><li>Contact us</li></Link>
                            <Link  to="/OnlineOrder"><li>Online order</li></Link>
                            <Link to="/cart"><li>Cart</li></Link>
                        
                    
                    </ul>

                   
                    
                   

                </div>
               
       
             )

   

}

export default NavBar;