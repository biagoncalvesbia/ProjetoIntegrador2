import {servicesEntreprenuer} from "../models/services_entreprenuer.js"

export const Register = async (req, res) => {
    const { Horarios, Servicos, Atendimentos } = req.body;

    try {
        const createService = await servicesEntreprenuer.create({
            Horarios,
            Servicos,
            Atendimentos,
          
        });
     await servicesEntreprenuer.save()

      res.status(201).json(servicesEntreprenuer)
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Internal server error"})
    }
}