import 'dotenv/config'
import express from 'express'
import * as UserController from './controllers/UserController'
import BullBoard from 'bull-board'
import Queues from './services/lib/Queue'

const app = express()

BullBoard.setQueues(Queues.queues.map(queue => queue.bull))

app.use(express.json())
app.post('/users', UserController.createUser)

app.use('/admin/queues', BullBoard.UI)

app.listen(3333, () => {
  console.log('Listen on port - 3333')
})
