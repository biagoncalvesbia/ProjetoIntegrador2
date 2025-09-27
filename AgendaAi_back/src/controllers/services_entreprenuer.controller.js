import { Entrepreneur } from "../models/Entrepreneur.js";
import { servicesEntreprenuer } from "../models/services_entreprenuer.js";

export const Register = async (req, res) => {
  const { nome, categoria, descricao, duracao, horainicio, horafim, dias } =
    req.body;

  const { id } = req.params
  console.log('RECEBENDO ID', id)
  try {
    const createServiceEntreprenuer = await servicesEntreprenuer.create({
      nome: nome,
      categoria: categoria,
      descricao: descricao,
      duracao: duracao,
      horainicio: horainicio,
      horafim: horafim,
      dias: dias,
      entreprenuer: id
    });
    await createServiceEntreprenuer.save();
    await Entrepreneur.findByIdAndUpdate(id, {
      $push: { services_entreprenuer: createServiceEntreprenuer._id },
    });

    res.status(201).json(createServiceEntreprenuer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const GetAllServicesEntreprenuer = async (req, res) => {

  const { id } = req.params

  try {
    const services = await servicesEntreprenuer.find({
      $where: {
        _id: id
      }
    })
    if (!services) res.status(200).json({ message: 'Sem serviços nessa empresa' })
    res.status(200).json(services)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
}