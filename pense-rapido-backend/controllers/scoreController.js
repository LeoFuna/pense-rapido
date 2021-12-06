const getAll = async (_req, res) => {
  // const { id } = req.body
  try {
    res.status(200).json({ message: 'Score atualizado com sucesso' })
  } catch (e) {

  }
}

module.exports = {
  getAll
}