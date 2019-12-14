// Processando a fila de jobs

import 'dotenv/config'
import Queue from './services/lib/Queue'
import * as Sentry from '@sentry/node'

Sentry.init({ dsn: 'https://aca9379667b44cfa8c79ff233c6acf5b@sentry.io/1857108' })

Queue.process()
