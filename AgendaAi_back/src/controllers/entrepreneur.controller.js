import { Entrepreneur } from "../models/Entrepreneur.js"
export const Register = async (req, res) => {
  const { name, cpf, telefone, cep, rua, numero, comple, bairro, cidade, estado, image } = req.body
  const { userId } = req.params

  try {
    const entrepreneur = await Entrepreneur.create({
      name,
      cpf,
      telefone,
      cep,
      rua,
      numero,
      comple,
      bairro,
      cidade,
      estado,
      image,
      userId
    })
    await entrepreneur.save()

    res.status(201).json(entrepreneur)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Internal server error" })
  }
}