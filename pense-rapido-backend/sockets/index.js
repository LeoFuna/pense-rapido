const players = require('../populate/players')
module.exports = (io) =>
  io.on("connection", (socket) => {
    socket.on("squarePress", async () => {
      players('score', socket.id)
      // console.log(`O jogador: ${playerThatPressed.playerName}, marcou 1 ponto`);
      io.emit('updateOnlinePlayers', players())
      // io.emit("updateSquarePosition") aqui deve atualizar a posição do quadrado para outro local de forma aleatória
      // io.emit("refreshScore", {  }); aqui o io deve emitir uma atualização para o score do jogador que clicou primeiro para o front
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