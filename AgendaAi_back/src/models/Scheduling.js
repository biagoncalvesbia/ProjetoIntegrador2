import mongoose from "mongoose";

const schedulingSchema = new mongoose.Schema({
    age: {
        type: Number,
        required: true,
    },
    horario: {
        type: Date,
        required: true,
    },
    tamanho_cabelo: {
        type: String,
        required: false
    }, 
    descricao: {
        type: String,
        required: false,
    },
    imagem: {
        type: String,
        required: false,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    entrepreneur_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Entrepreneur",
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
      }


})

export const Scheduling = mongoose.model('Scheduling', schedulingSchema )