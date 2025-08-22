import mongoose from "mongoose";

const entrepreneurSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        require: true,
    },
    telefone: {
        type: Number,
        require: true,
    },
    cep: {
        type: Number,
        require: true,
        maxLenght: 8
    },
    rua: {
        type: String,
        require:true,
    },
    numero:{
        type: String,
        require: true,
    },
    comple: {
        type: String,
        require: true
    },  
    bairro:{
        type: String,
        require: true,
    },
    cidade: {
        type: String,
        require: true,
    },
    estado: {
        type: String,
        require: true,
    },
    image:{
        type: String,
        require: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
      }

})

export const Entrepreneur = mongoose.model('Entrepreneur', entrepreneurSchema)

//     schedulings: [
 //       {
   //         type: mongoose.Schema.Types.ObjectId,
     //       ref: "Scheduling"
       // }
   // ],