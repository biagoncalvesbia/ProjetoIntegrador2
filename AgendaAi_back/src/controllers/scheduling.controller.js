import { Scheduling } from "../models/Scheduling.js"

export const Register = async (req, res) => {
    const {name, age, horario, tamanho_cabelo, descricao, imagem, user_id, entreprenuer_id} = req.body;
    
    try {
        // Validação básica dos campos obrigatórios
        if (!name || !horario || !user_id || !entreprenuer_id) {
            return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }

        const createScheduling = await Scheduling.create({
                name,
                age,
                horario,
                tamanho_cabelo,
                descricao,
                imagem,
                user_id,
                entreprenuer_id
        });
        await createScheduling.save()

        return res.status(201).json(createScheduling);
    } catch (error) {
        console.error("Erro ao criar agendamento:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}

export const getAllScheduling = async () => {
    const schedulings = await Scheduling.find().populate("")
}