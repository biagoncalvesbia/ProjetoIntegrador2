import { Entrepreneur } from "../models/Entrepreneur.js"
import createToken from "../utils/createToken.js"
import { hashPass } from "../utils/hashPass.js"
export const Register = async (req, res) => {
  const {name, estabe, cpf, telefone, cep, rua, numero, comple, bairro, cidade, estado } = req.body
  const verifyEntrepreneur = await Entrepreneur.findOne({
    email: email
  })

  if(verifyEntrepreneur){
    return res.status(400).json({message: "User already exists"})
  }

  if(password !== confpass){
    return res.status(400).json({message: "Passwords do not match"})
  }

  const hash = await hashPass(password)

  try {
    const entrepreneur = await Entrepreneur.create({
     name,
     estabe,
     cpf,
     telefone,
     cep,
     rua,
     numero,
     comple,
     bairro,
     cidade,
     estado,
     hash
    })
    await entrepreneur.save()
    
    res.status(201).json(entrepreneur)
  } catch (error) {
    console.error(error)
    return res.status(500).json({message: "Internal server error"})
  }
}

export const Login = async (req, res)  => {
  const {email, password} = req.body

  const verifyEntrepreneur = await Entrepreneur.findOne({
    email: email
  })

  if(verifyEntrepreneur) {
    try {
      const token = createToken({name: verifyEntrepreneur.password})
      res.status(200).json({
        ...verifyEntrepreneur,
        password: undefined,
        token: token
      })
    } catch (error) {
      console.error(error)
    }
  }
}