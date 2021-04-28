function Button(props){

    return(
        <button className=" btn btn-success" onClick={props.onclick}>{props.btnname}
        
        </button>
    )
}

export default Button;