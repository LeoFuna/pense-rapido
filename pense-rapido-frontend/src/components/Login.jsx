import React, { useState } from "react";
import socket from "../utils/socketClient";

export default function Login({ setIsLogged }) {
  const [name, setName] = useState('');

  async function submitLogin() {
    const fetchResponse = await fetch(`http://localhost:3002/${ name }`)
    .then(data => data.json())
    .then(data => data)
    if (!fetchResponse.err) {
      socket.emit('newPlayerLogin', { playerName: name })
      setIsLogged(true)
    }
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