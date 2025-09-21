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
  duração: {
    type: String,
    required: true,
  },
  horainicio: {
    type: String,
    required: true,
  },
  horafim: {
    type: String,
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
    ref: "Entreprenuer"
  }


})
