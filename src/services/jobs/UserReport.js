export default {
  key: 'UserReport',
  options: {
    delay: 5000 // executa o job depois de 5s
  },
  // Enviar um e-mail, leva muito tempo usando o await. Mesmo que faça usando async
  // ainda estará usando recursos e não dá pra saber se teve erros, por isso usar background jobs
  // Mail.sendMail({
  //   from: 'Queue Teste <queuenode@email.com.br>',
  //   to: `${name} <${email}>`,
  //   subject: 'Cadastro de usuário',
  //   html: `Olá ${name}, esse é o sistema de background jobs com node js`
  // })
  async handle ({ data }) {
    const { user } = data
    console.log(user)
  }
}
