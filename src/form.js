import { useState } from "react";
import Button from "./Button.js"

function Form(){
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');

    function ShowData(e){
        e.preventDefault()
            return(
                <div>{console.log("i have been clciked") } </div>
            )
    }



    return(
        <div className="container">
            <form  className='form-group'>
                    <label htmlFor="Name">Name</label>
                        <input  className="form-control" type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
                    <label htmlFor="Address">Address</label>  
                        <input className="form-control" type="text" value={address} onChange={(e)=>setaddress(e.target.value)}/>
                    <label htmlFor="Email">Email</label>
                        <input className="form-control" type="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                        
                    <label htmlFor="Phone">Phone</label>
                        
                        <input  className="form-control" type="tel" value={phone} onChange={(e)=>setphone(e.target.value)}/>
                        
                    <Button onClick={ShowData} btnname='order'/>
            </form>
               
        </div>
    );
}

export default Form;