import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    schedulings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Scheduling"
      }
    ],
    created_at: {
      type: Date,
      default: Date.now,
    },
})

export const User = mongoose.model('User', userSchema)