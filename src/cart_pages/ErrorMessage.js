function Error({message}){
    if(!message)
        return null;
    return <p className="Error">{message}</p>

}

export default Error;