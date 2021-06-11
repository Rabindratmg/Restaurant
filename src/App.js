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



function App() {
        const [cartitems, setcartitems] = useState([]);
        const [menu, setmenu] = useState([]);

        useEffect(() => {
            axios.get("http://localhost:8000/api/menu")
            .then(resp=>{
                console.log(resp.data)
                setmenu(resp.data)
            })
            .catch(error=>console.log(error))
           },[])

           function AdditemsCart(data){
                   console.log(data)
                   return axios.post("http://localhost:8000/api/cart/", {
                                item_name: data.item_name,
                                price:  data.price,
                                quantity: 1
   
                                
                                })
                                .then(response=>console.log(response))
                                .catch(error=>console.log(error))

                   
           }
           function DeleteCartItems(id){
                   return axios.delete(`http://localhost:8000/api/cart/${id}`)
                   .then(response=>console.log(response))
                   .catch(error=>console.log(error))



           }

           useEffect(() => {
                axios.get("http://localhost:8000/api/cart/")
                .then(resp=>{
                    console.log(resp.data)
                    setcartitems(resp.data)
                })
                .catch(error=>console.log(error))
               },[])
    



        
        

      


        // const onAdditems = (product)=>{
        //         const exist = cartitems.find(x=>x.id=== product.id);
        //         if(exist){
        //                  setcartitems(cartitems.map((x)=>x.id===product.id?{...exist,qty:exist.qty+1}:x));

        //                 }
        //          else{
        //          setcartitems([...cartitems,{...product,qty:1}]);
        //          }


        // }
        const Increment=(product)=>{
                return axios.put(`http://localhost:8000/api/cart/${product.id}/`,{
                                item_name: product.item_name,
                                price:  product.price,
                                quantity: product.quantity+1
                        
                })
                .then(response=>console.log(response))
                .catch(error=>console.log(error))


                }

        const Decrement=(product)=>{
                return axios.put(`http://localhost:8000/api/cart/${product.id}/`,{
                        item_name: product.item_name,
                        price:  product.price,
                        quantity: product.quantity-1
                
        })
        .then(response=>console.log(response))
        .catch(error=>console.log(error))


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
                                <OnlineOrder items={ menu } check={cartitems} onAdditem={ AdditemsCart }></OnlineOrder>
                        </Route>
                        <Route path="/cart">
                                <Cart cartitem={cartitems} onAdditem={Increment} onDecrement={Decrement} DeleteData={DeleteCartItems}></Cart>
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