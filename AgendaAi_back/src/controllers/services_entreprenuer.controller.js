import {servicesEntreprenuer } from "../models/services_entreprenuer.js";

export const Register = async (req, res) => {
  const { nome, categoria, descricao, duracao, horainicio, horafim, dias } =
    req.body;

  try {
     const servicesEntreprenuer = await servicesEntreprenuer.create({
      nome,
      categoria,
      descricao,
      duracao,
      horainicio,
      horafim,
      dias,
    });
    await servicesEntreprenuer.save();

    res.status(201).json(servicesEntreprenuer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
