import Button from "./Button.js";


const Cart  = ( {cartitem,onAdditem,onDecrement} )=>{
    const finalprice= cartitem.reduce((a,c)=>a+c.price*c.qty,0);

        function showcartitems(){
            return(
                cartitem.map((item)=>(
                    <tr  scope='row' key={item.id} >
                    <td> {item.item_name}</td>
                    <td>RS {item.price}</td>
                    <td><Button onclick={()=>onDecrement(item)} btnname="-"/> {item.qty} <Button onclick={()=>onAdditem(item)} btnname="+"/></td>
                    <td>{item.price} * {item.qty} = {item.price*item.qty}</td>
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
                                <a href="/form"><Button btnname="Order"/></a>
                                <br></br>
                                Or login and get 10% discount
                                <a href="/login"><Button btnname="Login"/></a>

                                
                            </div>:<div>Add items</div>  
                            }   
                           </div>
               
                
               

            </div>
        </div>

    )
    




}





export default Cart;