import React, { useState } from "react";
import Message from "./Message";


const Form = () => {
  const [user,setUser] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(""); 

  const handleChangeName = (e) => setUser({...user, name: e.target.value});
  const handleChangeEmail = (e) => setUser({...user, email: e.target.value});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const numRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(
      user.name.trim().length>4 &&
      numRegex.test(user.email)
    ){
      setError(false);
      setShow(true); 
      setResponse(`Gracias ${user.name}, te contactaremos cuando antes vía mail`);
      console.log(user)
    } else {
      setError(true)
      setShow(true)
      setResponse("Por favor verifique la información nuevamente.");
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full name" value={user.name} onChange={handleChangeName}/>
        <input type="email" placeholder="Email" value={user.email} onChange={handleChangeEmail}/>
        <button type="submit">Send</button>   
      </form>

      <Message show={show} response={response} />
    </div>
  );
};

export default Form;
