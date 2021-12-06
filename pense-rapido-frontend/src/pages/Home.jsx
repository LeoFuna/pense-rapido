import React, { useState } from "react";
import socket from '../utils/socketClient';
import Login from "../components/Login";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);
  function handleClick() {
    socket.emit('squarePress', { playerId: 1 })
  }

  return(
    <div>
      { isLogged ? 
      <>
        <h1>Pense Rápido</h1>
        <div>
          <div>
            Aqui ficam as partes de configs e start do game bem como score
          </div>
          <div>
            <button onClick={ () => handleClick() }>Clique aqui</button>
          </div>
        </div>
      </> : 
      <Login />
      }
 
    </div>
  )
}