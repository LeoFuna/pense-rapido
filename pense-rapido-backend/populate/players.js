let players = []
module.exports = (type, payload) => {
  if (type === 'add') {
    players.push(payload)
  }
  if (type === 'remove') {
    const searchUser = players.filter((player) => player.id !== payload);
    players = searchUser;
  }
  if (type === 'score') {
    const playerIndex = players.map(player => player.id === payload);
    playerIndex.indexOf(true);
    players[playerIndex.indexOf(true)].score += 1
  } 
  return players
}