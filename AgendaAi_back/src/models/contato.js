import mongoose from "mongoose";

const contatoSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true,
    },
    telefone:{
        type: String,
        require: true,
        maxLenght: 12
    },
    assunto:{
        type: String,
        require: true,
    },
    mensagem:{
        type: String,
        require: true,
    },
        created_at: {
        type: Date,
        default: Date.now,
    }

})

export const Contato = mongoose.model( 'contato', contatoSchema)