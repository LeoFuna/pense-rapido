import React, { useEffect, useState } from "react";
import socket from '../utils/socketClient';
import Login from "../components/Login";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);
  const [onlinePlayers, setOnlinePlayers] = useState([]);
  const [squarePosition, setSquarePosition] = useState({ top: '0%', left: '0%' })
  function handleClick() {
    socket.emit('squarePress')
  }

  useEffect(() => {
    socket.on('updateOnlinePlayers', (players) => {
      setOnlinePlayers(players);
    })
    setIsLogged(false)
    socket.on('squarePosition', (data) => {
      setSquarePosition(data)
    })
  }, [])

  return(
    <div>
      { isLogged ? 
      <>
        <h1>Pense Rápido</h1>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <div style={{ backgroundColor: 'red', width: '10vw', height: '80vh' }}>
            <ul>
              { onlinePlayers.map((player) => 
              <li style={{ display: 'flex' }}>
                <p>{ player.playerName }</p>
                <p> {player.score} pontos</p>
              </li>) }
            </ul>
            <button>Iniciar o Jogo</button>
          </div>
          <div style={{ backgroundColor: 'blue', width: '85vw' }}>
            <button style={{ 
              position: 'relative', 
              display: 'block', 
              width: '5%', 
              height: '5%', 
              borderRadius: '10%', 
              top: `${squarePosition.top}`, 
              left: `${squarePosition.left}` 
              }} onClick={ () => handleClick() }>Quadrado</button>
          </div>
        </div>
      </> : 
      <Login setIsLogged={ setIsLogged } />
      }
 
    </div>
  )
}