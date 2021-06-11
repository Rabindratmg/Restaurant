

const Login=()=>{

    return(

        <div>
            <form className="form-group">
                <label htmlFor="username">username/Email</label>
                <input className="form-control" type="text" />
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" />
                <br>
                </br>
                <center><button className="btn btn-primary">Login</button></center>
            </form>
        </div>
    );

}

export default Login;