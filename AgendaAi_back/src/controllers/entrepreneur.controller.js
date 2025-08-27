import { Entrepreneur } from "../models/Entrepreneur.js"
import { User } from "../models/User.js"

export const Register = async (req, res) => {
  const { name, cpf, telefone, cep, rua, numero, comple, bairro, cidade, estado, image } = req.body
  const { userId } = req.params
  console.log({
    body: req.body
  })

  const format_cpf = cpf.replace(/\D/g, '');
  const format_telefone = telefone.replace(/\D/g, '');
  const format_cep = cep.replace(/\D/g, '');

  try {
    const verifyEntrepreneur = await User.findById(userId).populate('entrepreneur').exec()
    console.log({
      verify: verifyEntrepreneur
    })
    if (verifyEntrepreneur?.entrepreneur) {
      res.status(400).json({
        message: "Já existe uma empresa cadastrada com esse usuário"
      })
    } else {
      const entrepreneur = await Entrepreneur.create({
        name: name,
        cpf: Number(format_cpf),
        telefone: Number(format_telefone),
        cep: Number(format_cep),
        rua: rua,
        numero: numero,
        comple: comple,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        image: image,
        user: userId
      })
      try {
        const user = await User.findByIdAndUpdate(userId, {
          $push: { entrepreneur: entrepreneur?._id }
        })
        await user.save()
      } catch (error) {
        console.error(error)
      }
      await entrepreneur.save()
      res.status(201).json(entrepreneur)
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Internal server error" })
  }
}

export const Delete = async (req, res) => {
  const { id } = req.params
  console.log({
    id: id
  })
  try {
    // Exclui o documento do empreendedor
    await Entrepreneur.deleteOne({ user: id })

    // Remove a referência no User
    await User.findByIdAndUpdate(id, {
      $unset: { entrepreneur: id }
    })

    res.status(200).json({
      message: 'Empresa excluída com sucesso'
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Erro ao excluir empresa" })
  }
}