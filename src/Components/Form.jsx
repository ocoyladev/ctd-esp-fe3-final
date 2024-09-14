import React, { useState } from "react";


const Form = () => {
  const [user,setUser] = useState("");
  const onChangeUser = (e) => setUser(e.target.value);
  const validateUser = (user) => {
    const withoutSpaces = user.trim();
    if (withoutSpaces >= 5){
      return true;
    } else {
      return false;
    }
  }
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (true){

    } else {

    }
  }


  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text" placeholder="Full name" value={user} onChange={onChangeUser}/>
        <input type="email" placeholder="Email"/>
        <button type="submit">Send</button>
        <p className="response"></p>
      </form>
    </div>
  );
};

export default Form;
