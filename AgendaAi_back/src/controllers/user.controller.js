import { User } from "../models/User.js"
import createToken from "../utils/createToken.js"
import { hashPass } from "../utils/hashPass.js"

export const Register = async (req, res) => {
  const { name, email, password, confirmPass } = req.body
  if (password !== confirmPass) {
    return res.status(400).json({ message: "As senhas estão diferentes" })
  }

  const verifyUser = await User.findOne({
    email: email
  })

  if (verifyUser) {
    return res.status(400).json({ message: "Usuário já existe" })
  }


  const hash = await hashPass(password)

  try {
    const user = await User.create({
      name: name,
      email: email,
      password: hash,
    })
    await user.save()
    return res.status(201).json(user)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Problemas no servidor" })
  }
}

export const Login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) throw new Error("Email e senha são obrigatórios")
  try {
    const verifyUser = await User.findOne({
      email: email
    }).select("-password")

    console.log({
      user: verifyUser
    })

    if (verifyUser) {
      try {
        const token = createToken({ name: verifyUser.name, id: verifyUser._id })
        res.status(200).json({
          user: verifyUser,
          token: token
        })
      } catch (error) {
        console.error(error)
      }
    }
  } catch (error) {
    console.error(error)
  }
}

export const GetUserById = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    console.log(user)
    if(!user) {
      return res.status(400).json({message: "Usuário não existe"})
    }

    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
}