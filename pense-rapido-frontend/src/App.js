import socket from './utils/socketClient'

function App() {

  function handleClick() {
    socket.emit('squarePress', { playerId: 1 })
  }

  return (
    <div>
      <button onClick={ () => handleClick() }>Clique aqui</button>
    </div>
  );
}

export default App;
