import Button from "./Button.js";
import {Link} from 'react-router-dom';

const Cart  = ( {cartitem,onAdditem,onDecrement,DeleteData} )=>{
    const finalprice= cartitem.reduce((a,c)=>a+c.price*c.quantity,0);

        function showcartitems(){
            return(
                cartitem.map((item)=>(
                    <tr   key={item.id} >
                    <td> {item.item_name}</td>
                    <td>RS {item.price}</td>
                    <td><Button onclick={()=>onDecrement(item)} btnname="-"/> {item.quantity} <Button onclick={()=>onAdditem(item)} btnname="+"/></td>
                    <td>{item.price} * {item.quantity} = {item.price*item.quantity}</td>
                    <td><button className="btn btn-danger" onClick={()=>DeleteData(item.id)}>Delete</button></td>
                    </tr>
                ))

            );

        }
    
    return(
        <div className="container-fluid" > 
        
            <div>
            
            {cartitem.length===0?<div>cart is empty</div>:
             
            

                    <table className="table">
                        <thead>
                                <tr>
                                <th scope="col">Item name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Qunatity</th>
                                <th scope="col">Final value(price x qunatity)</th>
                                <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                  {showcartitems()}
                            </tbody>
                    </table>
                            
                      
                        
                        
                        
                        
            }
                       
                    
                     
                

                
                <div>
               
                        
                        {(cartitem.length!==0)?
                            <div>  
                                <h4>your final order price is {finalprice} </h4> 
                                <Link to="/form"><Button btnname="Order"/></Link>
                                <br></br>
                                Or login and get 10% discount
                                <Link to="/login"><Button btnname="Login"/></Link>

                                
                            </div>:<div>Add items</div>  
                            }   
                           </div>
               
                
               

            </div>
        </div>

    )
    




}





export default Cart;