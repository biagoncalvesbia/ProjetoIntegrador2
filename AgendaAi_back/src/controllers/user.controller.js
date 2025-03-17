import { User } from "../models/User.js"

export const Register = async (req, res) => {
  const {name, email, password, confirmPass, role} = req.body
  const verifyUser = await User.findOne({
    email: email
  })

  if(verifyUser){
    return res.status(400).json({message: "User already exists"})
  }

  if(password !== confirmPass){
    return res.status(400).json({message: "Passwords do not match"})
  }

  try {
    const user = await User.create({
      name,
      email,
      password,
      confirmPass,
      role
    })
    await user.save()
    return res.status(201).json(user)
  } catch (error) {
    console.error(error)
    return res.status(500).json({message: "Internal server error"})
  }
}