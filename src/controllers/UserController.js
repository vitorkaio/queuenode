import Queue from '../services/lib/Queue'

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const user = {
      name,
      email,
      password
    }

    // Adicionar job RegistrationMail
    Queue.add({ user })

    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error })
  }
}
