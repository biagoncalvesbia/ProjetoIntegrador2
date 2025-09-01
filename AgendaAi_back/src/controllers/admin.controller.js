import { Entrepreneur } from "../models/Entrepreneur.js"

export const GetAll = async (req, res) => {
  try {
    const entrepreneurs = await Entrepreneur.find()
    return res.status(200).json(entrepreneurs)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Internal server error" })
  }
}
