module.exports = (io) =>
  io.on("connection", (socket) => {
    socket.on("squarePress", async ({ playerId }) => {
      console.log(`O jogador de id: ${id}, marcou 1 ponto`);
      // io.emit("refreshScore", data);
    });
  });