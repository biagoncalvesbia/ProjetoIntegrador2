import { Entrepreneur } from "../models/Entrepreneur.js";
import { servicesEntreprenuer } from "../models/services_entreprenuer.js";

// Substitua a função Register COMPLETA
export const Register = async (req, res) => {
  const { nome, categoria, descricao, duracao, time, dias } =
    req.body;

  const { id } = req.params; 
  console.log('RECEBENDO ID', id);
  
  try {
    const createServiceEntreprenuer = await servicesEntreprenuer.create({
      nome: nome,
      categoria: categoria,
      descricao: descricao,
      duracao: duracao,
      time: time,
      dias: dias,
      entrepreneur: id
    });
    
    await createServiceEntreprenuer.save();
    
     await Entrepreneur.findByIdAndUpdate(id, { $push: { services_entreprenuer: createServiceEntreprenuer._id } }, {new: true})

    res.status(201).json(createServiceEntreprenuer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const GetAllServicesEntreprenuer = async (req, res) => {
  const { id } = req.params; // id da empresa
  try {
    const services = await servicesEntreprenuer.find().where('entrepreneur').equals(id);
    res.status(200).json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
