import mongoose from "mongoose";

const entrepreneurSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    endereco: {
        type: String,
        require: true,
    },
    cep: {
        type: Number,
        require: true,
        maxLenght: 8
    },
    telefone: {
        type: Number,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    Horario: {
        type: String,
        require: true
    },  
    Tipos_atendimento:{
        type: String,
        require: true,
    },
    Funciona_finaldesemana: {
        type: String,
        require: true,
    },
    schedulings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Scheduling"
        }
    ],
    password: {
        type: String,
        require: true,
        maxLenght: 8
    },
    created_at: {
        type: Date,
        default: Date.now,
      }

})

export const Entrepreneur = mongoose.model('Entrepreneur', entrepreneurSchema)