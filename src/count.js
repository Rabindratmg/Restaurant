import React,{useState} from 'react';
import Button from "./Button.js";
import Cart from "./Cart.js";

function Count(){
    const [count, setcount] = useState(1);
    
    <Cart count={count} />
    function Increment(){
        setcount(count+1)
    }
    function Decrement(){
        setcount(count-1)
    }
    return(
        <>
        <Button onclick={Decrement} btnname= "-"/>  {count} <Button onclick={Increment} btnname="+"/>
        
        </>
    )

}
export default Count;