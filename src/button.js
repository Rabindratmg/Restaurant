function Button(props){

    return(
        <button className="btn-primary" onClick={props.onclick}>{props.btnname}
        
        </button>
    )
}

export default Button;