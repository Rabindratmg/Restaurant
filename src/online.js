import React,{ useState } from "react";
import data from "./menu.js";
import "./App.css"
import Button from "./button.js"




const OnlineOrder=()=>{
    const [Items] = useState(data);
    //const [cartitems]=useState([]);
    return(
        <div className="MenuItems">
            {Items.map((data)=>
            <ul>
                <li key={data.id}>
                    <p>{data.id}</p>
                    <h6>{data.item}</h6>
                    <img src={data.image}alt={data.image} />
                    <h6>{data.price}</h6>
                    <Button onclick={()=>AddItems(data.id)} btnname="Order"/>
                </li>
            </ul>
        )}
        </div>
        
    )

}

function AddItems(id){
    return console.log(`items added in cart ${id}`)
}

export default OnlineOrder;