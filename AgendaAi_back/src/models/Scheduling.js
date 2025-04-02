import mongoose from "mongoose";

const schedulingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        require: true,
    },
    horario: {
        type: Boolean,
        require: true,
    },
    tamanho_cabelo: {
        type: Boolean,
        required: true
    }, 
    descricao: {
        type: String,
        required: true,
    },
    imagem: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
      }


})

export const Scheduling = mongoose.model('Scheduling', schedulingSchema )