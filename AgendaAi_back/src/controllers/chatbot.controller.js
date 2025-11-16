// src/controllers/chatbot.controller.js

export const chatController = (req, res) => {
  const { mensagem } = req.body;

  if (!mensagem) {
    return res.json({ resposta: 'Por favor, digite uma mensagem.' });
  }

  const msg = mensagem.toLowerCase();
  let resposta = 'Desculpe, não entendi. Pode reformular?';

  if (msg.includes('oi') || msg.includes('olá')) {
    resposta = 'Oi! 😊 Como posso te ajudar hoje?';
  } else if (msg.includes('empresa')) {
    resposta = 'Para cadastrar uma empresa, vá até o menu “Empresas” e clique em “Cadastrar”.';
  } else if (msg.includes('agendar')) {
    resposta = 'Para agendar um horário, escolha o serviço e depois a data e hora disponíveis.';
  }

  return res.json({ resposta });
};
