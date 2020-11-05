import express from 'express'

const app = express()

app.use(express.static('/build'))

app.get('*', (req, res) => {
  res.render('/index.html')
})

app.listen(3001, () => {
  console.log('server listening')
})
