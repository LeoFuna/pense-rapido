const players = require('../populate/players')
module.exports = (io) =>
  io.on("connection", (socket) => {
    socket.on("squarePress", async () => {
      players('score', socket.id)
      io.emit('updateOnlinePlayers', players())
      const generateRandomPosition = () => Math.floor((Math.random() * 95));
      io.emit('squarePosition', { top: `${generateRandomPosition()}%`, left: `${generateRandomPosition()}%` })
    });
    socket.on("startGame", async () => {
      console.log('o Jogo foi iniciado!')
      // io.emit("updateSquarePosition") aqui vai chamar esse 'canal' para que apareça um quadrado na tela em local aleatório
    });
    socket.on("newPlayerLogin", async ({ playerName }) => {
      io.emit('updateOnlinePlayers', players('add', { id: socket.id, playerName, score: 0 }))
    })
    socket.on('disconnect', async () => {
      io.emit('updateOnlinePlayers', players('remove', socket.id ))
    })
  });