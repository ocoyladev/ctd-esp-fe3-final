import React from 'react'

const Message = ({ show, response }) => {
    if (!show) return null;  
    return <p>{response}</p>;
}

export default Message