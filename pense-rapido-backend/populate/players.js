let players = []
module.exports = (type, payload) => {
  if (type === 'add') {
    players.push(payload)
  }
  return players
}