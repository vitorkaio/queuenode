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

Para a acessar o bull-board

> http://localhost:3333/admin/queues