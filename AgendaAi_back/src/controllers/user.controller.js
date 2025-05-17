import { User } from "../models/User.js"
import createToken from "../utils/createToken.js"
import { hashPass } from "../utils/hashPass.js"

export const Register = async (req, res) => {
  const { name, surname, email, password, confirmPass } = req.body
  const verifyUser = await User.findOne({
    email: email
  })

  if (verifyUser) {
    return res.status(400).json({ message: "User already exists" })
  }

  if (password !== confirmPass) {
    return res.status(400).json({ message: "Passwords do not match" })
  }

  const hash = await hashPass(password)

  try {
    const user = await User.create({
      name: name,
      email: email,
      password: hash,
      surname: surname
    })
    await user.save()
    return res.status(201).json(user)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Internal server error" })
  }
}

export const Login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) throw new Error("Email e senha são obrigatórios")
  try {
    const verifyUser = await User.findOne({
      email: email
    })

    if (verifyUser) {
      try {
        const token = createToken({ name: verifyUser.name, id: verifyUser._id })
        res.status(200).json({
          ...verifyUser,
          password: undefined,
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