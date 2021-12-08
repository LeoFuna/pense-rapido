let players = []
module.exports = (type, payload) => {
  if (type === 'add') {
    players.push(payload)
  }
  if (type === 'remove') {
    const searchUser = players.filter((player) => player.id !== payload);
    players = searchUser;
  }
  return players
}