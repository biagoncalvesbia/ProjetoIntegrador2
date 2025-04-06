import { Entrepreneur } from "../models/Entrepreneur.js";
import { Scheduling } from "../models/Scheduling.js"
import { User } from "../models/User.js";
export const Register = async (req, res) => {
    const { age, horario, tamanho_cabelo, descricao, imagem, user_id, entrepreneur_id } = req.body;

    try {
        const createScheduling = await Scheduling.create({
            age,
            horario,
            tamanho_cabelo,
            descricao,
            imagem,
            user_id,
            entrepreneur_id
        });
        await createScheduling.save()
        await User.findByIdAndUpdate(user_id, {
            $push: { schedulings: createScheduling._id },
        });
        await Entrepreneur.findByIdAndUpdate(entrepreneur_id, {
            $push: { schedulings: createScheduling._id },
        });
        return res.status(201).json(createScheduling);
    } catch (error) {
        console.error("Erro ao criar agendamento:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}

export const getAllScheduling = async () => {
    const schedulings = await Scheduling.find().populate("")
}