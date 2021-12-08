import React, { useEffect, useState } from "react";
import socket from '../utils/socketClient';
import Login from "../components/Login";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);
  const [onlinePlayers, setOnlinePlayers] = useState([]);
  function handleClick() {
    socket.emit('squarePress')
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
            <ul>
              { onlinePlayers.map((player) => 
              <li style={{ display: 'flex' }}>
                <p>{ player.playerName }</p>
                <p> {player.score} pontos</p>
              </li>) }
            </ul>
            <button>Iniciar o Jogo</button>
          </div>
          <div>
            <button onClick={ () => handleClick() }>Quadrado</button>
          </div>
        </div>
      </> : 
      <Login setIsLogged={ setIsLogged } />
      }
 
    </div>
  )
}