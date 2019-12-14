import Queue from 'bull'
import redisConfig from '../lib/redis'

import RegistrationMail from '../jobs/RegistrationMail'

// Adicionando o envio de email na fila
const mailQueue = new Queue(RegistrationMail.key, redisConfig)

export default mailQueue
