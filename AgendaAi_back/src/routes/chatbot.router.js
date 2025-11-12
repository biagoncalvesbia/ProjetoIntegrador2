// src/routes/chatbot.routes.js
import express from 'express';
import { Router } from 'express';
import { chatController } from '../controllers/chatbot.controller.js';

export const routerChat = Router()

routerChat.post('/', chatController);

export default routerChat;
