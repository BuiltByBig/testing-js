export default (req, res) => {
  const message = `hello ${req.body.name}`

  res.json({ message })
}
