import mongoose from "mongoose";

const servicesEntreprenuerSchema = new mongoose.Schema({ 

  Horarios:{
    type: String,
    required: true,              
  },
  Servicos:{
    type: String,
    required: true,              
  },
  Atendimentos:{
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
