import { User } from "../models/User.js"
import createToken from "../utils/createToken.js"
import { hashPass } from "../utils/hashPass.js"
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { sendWelcomeEmail } from "../utils/mailer.js"

// ===============================================================
// REGISTER (ALTERADO COM ENVIO DE EMAIL DE BOAS-VINDAS)
// ===============================================================
export const Register = async (req, res) => {
  const { name, email, password, confirmPass } = req.body;

  if (password !== confirmPass) {
    return res.status(400).json({ message: "As senhas estão diferentes" });
  }

  const verifyUser = await User.findOne({ email });

  if (verifyUser) {
    return res.status(400).json({ message: "Usuário já existe" });
  }

  const hash = await hashPass(password);

  try {
    const user = await User.create({
      name,
      email,
      password: hash,
    });

    await user.save();

    // ------------------------------------------------
    // 📩 Enviar e-mail de boas-vindas após o cadastro
    // ------------------------------------------------
    try {
      await sendWelcomeEmail(user.email, user.name);
      console.log("Email de boas-vindas enviado!");
    } catch (err) {
      console.error("Erro ao enviar e-mail de boas-vindas:", err);
    }

    return res.status(201).json(user);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Problemas no servidor" });
  }
};

// ===============================================================
// LOGIN
// ===============================================================
export const Login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email e senha são obrigatórios" });

  try {
    const verifyUser = await User.findOne({ email });

    if (!verifyUser)
      return res.status(400).json({ message: "Usuário ou senha inválidos" });

    const verifyPass = await bcrypt.compare(password, verifyUser.password);

    if (!verifyPass)
      return res.status(400).json({ message: "Usuário ou senha inválidos" });

    const token = createToken(
      { name: verifyUser.name, id: verifyUser._id },
      "3d"
    );

    res.status(200).json({
      user: verifyUser,
      token,
    });

    console.log("USUÁRIO LOGADO:", verifyUser.name);

  } catch (error) {
    console.error(error);
  }
};

// ===============================================================
// GET USER BY ID
// ===============================================================
export const GetUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    if (!user)
      return res.status(400).json({ message: "Usuário não existe" });

    res.status(200).json(user);

  } catch (error) {
    console.log(error);
  }
};

// ===============================================================
// REQUEST PASSWORD RESET
// ===============================================================
export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

    const secret = process.env.SECRET_KEY + user.password;
    const token = jwt.sign({ id: user._id, email: user.email }, secret, {
      expiresIn: "15m",
    });

    const resetURL = `http://localhost:3000/user/resetpassword?id=${user._id}&token=${token}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "brunocapita.dev@gmail.com",
        pass: "rphp tdwn ynhw wphp",
      },
    });

    const mailOptions = {
      to: user.email,
      from: "brunocapita.dev@gmail.com",
      subject: "Esqueci minha senha",
      text: `Clique no link para redefinir sua senha:\n\n${resetURL}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Link de reset enviado!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ===============================================================
// RESET PASSWORD
// ===============================================================
export const resetPassword = async (req, res) => {
  const { id, token } = req.query;
  const { password } = req.body;

  try {
    const oldUser = await User.findById(id);

    if (!oldUser)
      return res.status(400).json({ message: "Usuário não encontrado!" });

    const secret = process.env.SECRET_KEY + oldUser.password;

    try {
      const verify = jwt.verify(token, secret);

      if (!verify) {
        return res.status(400).json({ message: "Token inválido!" });
      }

      const newPassword = await bcrypt.hash(password, 10);

      await User.findByIdAndUpdate(id, { password: newPassword });

      res.status(200).json("Senha redefinida");

    } catch (error) {
      console.error(error);
      res.status(400).json(error);
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ===============================================================
// GET ALL USERS
// ===============================================================
export const GetAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
