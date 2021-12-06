const players = [];
const getAll = async (req, res) => {
  const { playerName } = req.params
  try {
    const foundPlayer = players.find(player => player === playerName)
    if (foundPlayer) {
      console.log('Já existe um jogador com esse nome, favor alterar')
      return res.status(400).json({ err: 'error', message: 'Nome já existente...' })
    }
    players.push(playerName)
    res.status(200).json({ message: 'Jogador cadastrado com sucesso' })
  } catch (e) {

  }
}

module.exports = {
  getAll
}