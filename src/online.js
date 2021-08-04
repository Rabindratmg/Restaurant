import "./App.css";
import Button from "./Button.js";




const OnlineOrder=( {items,onAdditem,check} )=>{
    
    return(
        <div className="container-fluid">
            <div className="row">
            {items.map(data=>
            <div className="col-3" key={data.id}>
                    <h4> {data.item_name}</h4>
                    <h4>RS {data.price}</h4>
                    {check.find(x=>x.item_name===data.item_name)?<Button btnname="ItemsAdded"></Button>: 
                    <Button onclick={()=>onAdditem(data)} btnname="Order"/>}
                    <hr></hr>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    
            </div>
            )}
        </div>

        </div>
        
    )

}



export default OnlineOrder;