import mongoose from "mongoose";

const schedulingSchema = new mongoose.Schema({
    age: {
        type: Number,
        require: true,
    },
    horario: {
        type: String,
        require: true,
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
        ref: "User"
    },
    entreprenuer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Entrepreneur"
    },
    created_at: {
        type: Date,
        default: Date.now,
      }


})

export const Scheduling = mongoose.model('Scheduling', schedulingSchema )