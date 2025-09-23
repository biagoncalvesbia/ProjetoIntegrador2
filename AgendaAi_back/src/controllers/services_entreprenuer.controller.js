import {servicesEntreprenuer } from "../models/services_entreprenuer.js";

export const Register = async (req, res) => {
  const { nome, categoria, descricao, duracao, horainicio, horafim, dias } =
    req.body;

  try {
     const createServiceEntreprenuer = await servicesEntreprenuer.create({
      nome,
      categoria,
      descricao,
      duracao,
      horainicio,
      horafim,
      dias,
    });
    await createServiceEntreprenuer.save();

    res.status(201).json(createServiceEntreprenuer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
