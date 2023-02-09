import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 8080

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.get('/', async (req, res) => {
  res.send('Hello from DALL-E')
})

const startServer = async () => {
  app.listen(PORT, () =>
    console.log(`Server has started on port http://localhost:${PORT}`)
  )
}

startServer()
