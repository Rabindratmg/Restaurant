import Button from "./Button.js";


const Cart  = ( {cartitem,onAdditem,onDecrement} )=>{
    const finalprice= cartitem.reduce((a,c)=>a+c.price*c.qty,0);

    
    return(
        <div className="container-fluid" > 
            <div>
            {cartitem.length===0?<div>cart is empty</div>:
            cartitem.map((item)=>(
                    <div className="col" key={item.id}>
                        <hr></hr>
                        <h4> {item.item}</h4>
                        <img style={{height:"100px",width:"100px"}} src={item.image} alt="MenuImages" />
                        <h4>RS {item.price}</h4>
                        <h6>No of items<Button onclick={()=>onDecrement(item)} btnname="-"/> {item.qty} <Button onclick={()=>onAdditem(item)} btnname="+"/></h6>
                        <h6> total price of item = {item.price} * {item.qty} = {item.price*item.qty}</h6>
                        
                        </div>
                    
                     
                

                ))}
                <div>
               
                        
                        {(cartitem.length!==0)?
                            <div>  
                                <h4>your final order price is {finalprice} </h4> 
                                <Button btnname="Order"/>
                            </div>:<div>Add items</div>  
                            }   
                           </div>
               
                
               

            </div>
        </div>

    )
    




}





export default Cart;