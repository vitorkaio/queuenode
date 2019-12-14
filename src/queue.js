// Processando a fila de jobs

import 'dotenv/config'
import Queue from './services/lib/Queue'
import RegistrationMail from './services/jobs/RegistrationMail'

Queue.process(RegistrationMail.handle)
