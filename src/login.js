import React,{useState} from 'react';
import Button from "./Button"

const Login=(props)=>{
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const Loginuser=()=>{
        props.login(username,password)
        .then(resp=>console.log(resp))
        .catch(error=>console.log(error))
    }
    

    return(

        <div className="form-type">
                <label htmlFor="username" className="form-label">username/Email</label>
                <input className="form-control" type="text" value={username} onChange={e=>setusername(e.target.value)} />
                <label htmlFor="password" className="form-label">Password</label>
                <input className="form-control" type="password" value={password} onChange={e=>setpassword(e.target.value)}/>
                <br>
                </br>
                <center><Button  onclick={Loginuser} className="btn btn-primary" btnname="Login"></Button></center>
           
        </div>
    );

}

export default Login;