import React from "react";
import socket from '../utils/socketClient';

export default function Home() {

  function handleClick() {
    socket.emit('squarePress', { playerId: 1 })
  }

  return(
    <div>
      Aqui estará o game
      <button onClick={ () => handleClick() }>Clique aqui</button>
    </div>
  )
}