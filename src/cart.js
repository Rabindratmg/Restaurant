import React, { useState  } from 'react';
import Button from "./button.js"

const Cart=()=>{
    const [cartitem] = useState([1,2,3]);
    return(
        <div>
            {cartitem.length===0?<div>Please order from menu</div>: cartitem.map(data=> 
            <div>
                {data}
                <Button btnname="Order"/>
            
            </div>
                )
                
                }
           
        </div>

    )



}


export default Cart;
