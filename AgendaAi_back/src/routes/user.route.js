import { Router } from "express";
const router = Router();

router.post("/", (req, res) => {
  res.send("Rota de usuários funcionando!");
});

export default router;


