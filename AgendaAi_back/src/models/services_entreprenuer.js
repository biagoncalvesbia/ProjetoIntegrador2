import mongoose from "mongoose";

const servicesEntreprenuerSchema = new mongoose.Schema({ 
  nome: {
    type: String,
    required: true,
  },
  categoria:{
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  duracao: {
    type: Number,
    required: true,
  },
  horainicio: {
    type: Date,
    required: true,
  },
  horafim: {
    type: Date,
    required: true,
  },
  dias:{
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  entreprenuer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Entreprenuer",
    required: true
  }


})

 export const servicesEntreprenuer = mongoose.model('servicesEntreprenuer', servicesEntreprenuerSchema)
