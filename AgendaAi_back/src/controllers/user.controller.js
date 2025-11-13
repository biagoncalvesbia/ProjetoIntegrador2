import { User } from "../models/User.js"
import createToken from "../utils/createToken.js"
import { hashPass } from "../utils/hashPass.js"
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const Register = async (req, res) => {
  const { name, email, password, confirmPass } = req.body
  if (password !== confirmPass) {
    return res.status(400).json({ message: "As senhas estão diferentes" })
  }

  const verifyUser = await User.findOne({
    email: email
  })

  if (verifyUser) {
    return res.status(400).json({ message: "Usuário já existe" })
  }


  const hash = await hashPass(password)

  try {
    const user = await User.create({
      name: name,
      email: email,
      password: hash,
    })
    await user.save()
    return res.status(201).json(user)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Problemas no servidor" })
  }
}

export const Login = async (req, res) => {
  const { email, password } = req.body
  console.log('LOGIN REQ BODY', req.body)
  if (!email || !password) throw new Error("Email e senha são obrigatórios")
  try {
    const verifyUser = await User.findOne({
      email: email
    })

    const verifyPass = await bcrypt.compare(password, verifyUser.password)
    console.log('VERIFICANDO SENHA:', verifyPass)
    if(!verifyPass){
      return  res.status(400).json({ message: "Usuário ou senha inválidos" })
    }

    if (verifyUser) {
      try {
        const token = createToken({ name: verifyUser.name, id: verifyUser._id }, '3d')
        res.status(200).json({
          user: verifyUser,
          token: token
        })
        console.log('USUÁRIO LOGADO:', verifyUser)
      } catch (error) {
        console.error(error)
      }
    } else {
      res.status(400).json({ message: "Usuário ou senha inválidos" })
    }
  } catch (error) {
    console.error(error)
  }
}

export const GetUserById = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    console.log(user)
    if (!user) {
      return res.status(400).json({ message: "Usuário não existe" })
    }

    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
}

export const requestPasswordReset = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

    const secret = process.env.SECRET_KEY + user.password;
    const token = jwt.sign({ id: user._id, email: user.email }, secret, { expiresIn: '15m' });

    const resetURL = `http://localhost:3000/user/resetpassword?id=${user._id}&token=${token}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'brunocapita.dev@gmail.com',
        pass: 'rphp tdwn ynhw wphp',
      },
    });

    const mailOptions = {
      to: user.email,
      from: 'brunocapita.dev@gmail.com',
      subject: 'Esqueci minha senha',
      text: `Você está recebendo esta mensagem porque você (ou outra pessoa) solicitou a redefinição da senha da sua conta.
Clique no link a seguir ou cole-o no seu navegador para concluir o processo.:\n\n
      ${resetURL}\n\n
      Se você não solicitou isso, ignore este e-mail e sua senha permanecerá inalterada.\n`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Link de reset senha foi enviando com sucesso!' });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const resetPassword = async (req, res, next) => {
  const { id, token } = req.query;
  const { password } = req.body;
  console.log('id', id)
  console.log('token', token)
  try {
    const oldUser = await User.findOne({ _id: id });
    if (!oldUser) {
      res.status(400).json({ message: "Usuário não encontrado!" });
    }
    const secret = process.env.SECRET_KEY + oldUser.password;
    try {
      const verify = jwt.verify(token, secret)
      if (verify) {
        const newPassword = await bcrypt.hash(password, 10)
        const user = await User.findByIdAndUpdate({ _id: oldUser._id }, { $set: { password: newPassword } })
        console.log(user)
        res.status(200).json("Senha redefinada")
      } else {
        res.status(400).json("Token inválido!")
      }
    } catch (error) {
      console.error(error)
      res.status(400).json(error)
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const GetAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const ToggleStatusUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { isActive },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "usuario não encontrado" });
    }

    res.status(200).json({
      message: `Usuario ${isActive ? "ativado" : "inativado"} com sucesso!`,
      user,
    });
  } catch (error) {
    console.error("Erro ao alterar status:", error);
    res.status(500).json({ message: "Erro ao alterar status do usuario." });
  }
};
