import { Contato } from "../models/contato.js"

export const Register = async (req, res) =>{
    const {email, telefone, assunto, mensagem} = req.body
   
    try {
      const contato = await Contato.create({
        email,
        telefone,
        assunto,
        mensagem
      })
      await contato.save()

      res.status(201).json(contato)
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Internal server error"})
    }
}
