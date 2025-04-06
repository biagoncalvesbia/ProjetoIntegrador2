import { Entrepreneur } from "../models/Entrepreneur.js"

export const Register = async (req, res) => {
  const {name, endereco, cep, telefone, email, Horario, Tipos_atendimento, Funciona_finaldesemana, password, confpass} = req.body
  const verifyEntrepreneur = await Entrepreneur.findOne({
    email: email
  })

  if(verifyEntrepreneur){
    return res.status(400).json({message: "User already exists"})
  }

  if(password !== confpass){
    return res.status(400).json({message: "Passwords do not match"})
  }

  try {
    const entrepreneur = await Entrepreneur.create({
     name,
     endereco,
     cep,
     telefone,
     email,
     Horario,
     Tipos_atendimento,
     Funciona_finaldesemana,
     password,
     confpass
    })
    await entrepreneur.save()
    res.status(201).json(entrepreneur)
  } catch (error) {
    console.error(error)
    return res.status(500).json({message: "Internal server error"})
  }
}

export const Login = async (req, res)  => {
  const {email, password, confpass} = req.body

  const verifyEntrepreneur = await Entrepreneur.findOne({
    email: email
  })

  if(verifyEntrepreneur) {
    try {
      if(password === confpass) {
        
      }
    } catch (error) {
      console.error(error)
    }
  }
}