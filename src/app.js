import 'dotenv/config'
import express from 'express'
import * as UserController from './controllers/UserController'

const app = express()

app.use(express.json())
app.post('/users', UserController.createUser)

app.listen(3333, () => {
  console.log('Listen on port - 3333')
})
