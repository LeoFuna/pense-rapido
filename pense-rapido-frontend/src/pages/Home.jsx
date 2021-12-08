import React, { useEffect, useState } from "react";
import socket from '../utils/socketClient';
import Login from "../components/Login";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);
  const [onlinePlayers, setOnlinePlayers] = useState([]);
  function handleClick() {
    socket.emit('squarePress', { playerId: 1 })
  }

  useEffect(() => {
    socket.on('updateOnlinePlayers', (players) => {
      setOnlinePlayers(players);
    })
    setIsLogged(false)
  }, [])

  return(
    <div>
      { isLogged ? 
      <>
        <h1>Pense Rápido</h1>
        <div>
          <div>
            Aqui ficam as partes de configs e start do game bem como score
          </div>
          <ul>
            { onlinePlayers.map((player) => <li>{ player.playerName }</li>) }
          </ul>
          <div>
            <button onClick={ () => handleClick() }>Clique aqui</button>
          </div>
        </div>
      </> : 
      <Login setIsLogged={ setIsLogged } />
      }
 
    </div>
  )
}