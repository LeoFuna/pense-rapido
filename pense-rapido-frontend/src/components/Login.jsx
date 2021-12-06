import React, { useState } from "react";
import socket from "../utils/socketClient";

export default function Login() {
  const [name, setName] = useState('');

  function submitLogin() {
    socket.emit('newPlayerLogin', { playerName: name })
  }

  function handleLogin({ target }) {
    setName(target.value)
  }

  return(
    <div>
      <p>Apelido</p>
      <input onChange={ handleLogin } value={ name } type="text" />
      <button onClick={ () => submitLogin() }>Entrar</button>
    </div>
  )
}