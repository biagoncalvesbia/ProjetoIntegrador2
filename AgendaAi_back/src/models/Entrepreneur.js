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
    emial:{
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
        type: Boolean,
        require: true,
    },
    password: {
        type: String,
        require: true,
        maxLenght: 8
    },
    confpass:{
        type: String,
        require: true,
        maxLenght: 8
    }

})

export const Entrepreneur = mongoose.model('Entrepreneur', entrepreneurSchema)