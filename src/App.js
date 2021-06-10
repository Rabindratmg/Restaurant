import React,{useState,useEffect} from 'react';
import NavBar from "./nav.js";
import Home from "./Home.js";
import AboutUs from './About.js';
import Gallery from "./Gallery.js";
import ContactUs from "./Contact.js";
import OnlineOrder from "./online.js";
import Cart from "./Cart.js";
import Footer from './Footer.js';
import Form from './form.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import Login from './login.js';
import { mockComponent } from 'react-dom/cjs/react-dom-test-utils.production.min';


function App() {
        const [cartitems, setcartitems] = useState([]);
        const [menu, setmenu] = useState([
                {
                'id':1,
                'item_name':'momo',
                'price': 200
        },
        {

                'id':2,
                'item_name':'chowmein',
                'price': 100

        }
       
]);

        useEffect(() => {
            axios.get("http://localhost:8000/api/")
            
            .then(resp=>{
                console.log(resp.data)
                setmenu(resp.data)
            })
            .catch(error=>console.log(error))
           },[])

      


        const onAdditems = (product)=>{
                const exist = cartitems.find(x=>x.id=== product.id);
                if(exist){
                         setcartitems(cartitems.map((x)=>x.id===product.id?{...exist,qty:exist.qty+1}:x));

                        }
                 else{
                 setcartitems([...cartitems,{...product,qty:1}]);
                 }


        }
        const Increment=(product)=>{
                const exist = cartitems.find(x=>x.id=== product.id);
                if(exist){
                        setcartitems(cartitems.map((x)=>x.id===product.id?{...exist,qty:exist.qty+1}:x));

                }


        }

        
        const Decrement=(product)=>{
                const exist = cartitems.find(x=>x.id=== product.id);
                if(exist.qty===1){
                  setcartitems(cartitems.filter((x)=>x.id!==product.id));
            
                }
                else{
                  setcartitems(cartitems.map((x)=>x.id===product.id?{...exist,qty:exist.qty-1}:x));
                }
            
              }
  return (
        <Router>
        <div>
            <NavBar length={cartitems.length}/>
                <Switch>
                        <Route exact path='/'>
                                <Home></Home>
                        </Route>
                        <Route path='/aboutus'>
                                <AboutUs></AboutUs>
                        </Route>
                        <Route path='/gallery'>
                                <Gallery></Gallery>
                        </Route>
                        <Route path='/contactus'>
                                <ContactUs></ContactUs>
                        </Route>
                        <Route path='/menu'>
                                <OnlineOrder items={ menu } check={cartitems} onAdditem={ onAdditems }></OnlineOrder>
                        </Route>
                        <Route path="/cart">
                                <Cart cartitem={cartitems} onAdditem={Increment} onDecrement={Decrement} ></Cart>
                        </Route>
                        <Route path="/form">
                                <Form></Form>
                        </Route>
                        <Route path="/login">
                               <Login></Login> 
                        </Route>
                </Switch>   
                <Footer /> 
                
        </div>
        </Router>
    
   
  );

}


export default App;