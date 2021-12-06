module.exports = (io) =>
  io.on("connection", (socket) => {
    socket.on("squarePress", async ({ playerId }) => {
      console.log(`O jogador de id: ${playerId}, marcou 1 ponto`);
      // io.emit("updateSquarePosition") aqui deve atualizar a posição do quadrado para outro local de forma aleatória
      // io.emit("refreshScore", {  }); aqui o io deve emitir uma atualização para o score do jogador que clicou primeiro para o front
    });
    socket.on("startGame", async () => {
      console.log('o Jogo foi iniciado!')
      // io.emit("updateSquarePosition") aqui vai chamar esse 'canal' para que apareça um quadrado na tela em local aleatório
    });
  });