import express from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path'

const _dirname = dirname(fileURLToPath(import.meta.url));


const PORT = process.env.PORT || 3001

const app = express()

app.use(express.static('/build'))

app.get('*', (req, res) => {
  res.sendFile(_dirname + '/build/index.html')
})

app.listen(PORT, () => {
  console.log('server listening: ', PORT)
})
