import "./App.css";
import Button from "./Button.js";




const OnlineOrder=( {items,onAdditem} )=>{
    
    return(
        <div className="container-fluid">
            <div className="row">
            {items.map(data=>
            <div className="col ml-4" key={data.id}>
                    <h4> {data.item}</h4>
                    <img style={{height:"100px",width:"100px"}} src={data.image} alt="MenuImages" />
                    <h4>RS {data.price}</h4>
                    <Button onclick={()=>onAdditem(data)} btnname="Order"/>
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