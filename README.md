# queuenode
background jobs with node and redis

Para enviar email no node js, utilize a biblioteca nodemailer:

> yarn add nodemailer

Para o ambiente de desenvolvimento, utilize um servidor/cliente de email fake

> https://mailtrap.io/

Utilizar a biblioteca bull para gerenciar as filas:

> https://github.com/OptimalBits/bull

Instalando o redis no docker:

> docker run --name redis -p 6379:6379 -d -t redis:alpine

O bull-board é utilizado para verificar o status em tempo real das filas que estão rodando em segundo plano. Para a acessar o bull-board

> http://localhost:3333/admin/queues


### Sentry

O Sentry é um tracker de errors, com ele dá para verificar em tempo real todos os erros ocorridos na aplicação, em vez de usar o console.log(err), utiliza-se o Sentry.captureException(err)

> https://sentry.io/organizations/kaiok/issues/?project=1857108