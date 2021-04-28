import Button from "./Button.js";


const Cart  = ( {cartitem,onAdditem,onDecrement} )=>{
    const finalprice= cartitem.reduce((a,c)=>a+c.price*c.qty,0);

    function openForm(){
        console.log("clicked")
    }

    
    return(
        <div className="container-fluid" > 
            <div>
            
            {cartitem.length===0?<div>cart is empty</div>:
             
            cartitem.map((item)=>(
                    <div  key={item.id}>
                        <hr></hr>
                        <table >
                        
                            <tr >
                                <td  >
                                <h4> {item.item_name}</h4>
                                </td>
                                <td >
                                <h4>RS {item.price}</h4>
                                </td>
                                <td >
                                <h6><Button onclick={()=>onDecrement(item)} btnname="-"/> {item.qty} <Button onclick={()=>onAdditem(item)} btnname="+"/></h6>
                                </td>
                                <td>
                                <h6>{item.price} * {item.qty} = {item.price*item.qty}</h6>
                                </td>
                            </tr>
                      
                        
                        
                        
                            </table>
                        
                        </div>
            ))}
                       
                    
                     
                

                
                <div>
               
                        
                        {(cartitem.length!==0)?
                            <div>  
                                <h4>your final order price is {finalprice} </h4> 
                                <Button onclick={openForm} btnname="Order"/>
                                
                            </div>:<div>Add items</div>  
                            }   
                           </div>
               
                
               

            </div>
        </div>

    )
    




}





export default Cart;