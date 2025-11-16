// server.js - CHATBOT AGENDAAI COMPLETO E OTIMIZADO
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ====================================================================
// 💖 BASE DE CONHECIMENTO (Refatorada e Mais Amigável)
// ====================================================================
const conhecimento = {
  
  // Informações sobre o sistema AgendaAI
  sistema: {
    nome: 'AgendaAI',
    descricao: 'A plataforma inteligente que facilita agendamentos online para salões, clínicas de estética e barbearias. A gente conecta clientes e profissionais de beleza!',
    
    cadastro_empresa: {
      titulo: 'Passo a Passo para Cadastrar sua Empresa 🏢',
      passos: [
        '1️⃣ Acesse a plataforma e procure por "Quero Cadastrar Minha Empresa".',
        '2️⃣ Preencha seus dados e os do seu espaço (nome, telefone, e-mail, localização).',
        '3️⃣ Adicione todos os serviços que você oferece e os respectivos preços.',
        '4️⃣ Configure os horários em que você e sua equipe estarão disponíveis.',
        '5️⃣ Prontinho! Sua agenda está online e pronta para receber reservas! 🎉'
      ],
      campos: ['Nome do local', 'Nome do responsável', 'WhatsApp', 'Email', 'Endereço', 'Lista de serviços']
    },
    
    processo_agendamento: {
      titulo: 'Como o Cliente Agenda um Horário 📅',
      passos: [
        '1️⃣ O cliente acessa a AgendaAI e busca por serviços na sua região.',
        '2️⃣ Ele escolhe o seu salão ou clínica e clica em "Agendar".',
        '3️⃣ Vê seus serviços, horários e profissionais disponíveis.',
        '4️⃣ Escolhe o serviço (ex: unhas de gel, corte masculino, hidratação capilar).',
        '5️⃣ Seleciona o melhor dia e hora na sua agenda.',
        '6️⃣ Confirma os dados e recebe a confirmação imediata por email. Rápido e fácil! 📱'
      ]
    },
    
    funcionalidades: {
      empresas: [
        'Cadastro Rápido e Gratuito',
        'Gestão completa de Serviços e Preços',
        'Controle fácil de Agenda e Horários (em tempo real)',
        'Notificações de Agendamentos (você não perde nada!)',
        'Histórico e Ficha Completa dos Clientes'
      ],
      clientes: [
        'Busca fácil por estabelecimentos perto de você',
        'Agendamento 24/7 (a qualquer hora do dia ou da noite)',
        'Visualização de todos os serviços e preços',
        'Lembretes automáticos para não esquecer o horário'
      ]
    },
    
    vantagens: [
      '✅ 100% gratuito e sem pegadinhas',
      '✅ Sem taxa ou mensalidade',
      '✅ Interface super simples de usar',
      '✅ Reduz a taxa de não comparecimento com lembretes automáticos'
    ]
  },
  
  // Dicas de Cabelos
  dicas_cabelos: {
    'menu': '💇‍♀️ **Dicas de Cabelo**\n\nQual o seu desafio hoje?\n\n• **Seco** (sem brilho)\n• **Oleoso** (raiz pesada)\n• **Queda** (cabelo caindo)\n• **Crescimento** (quer acelerar)\n• **Cacheados** (cuidados específicos)',
    'seco': {
      problema: 'Cabelo Seco e Sem Vida',
      dicas: [
        '💧 Hidrate toda semana com uma máscara nutritiva.',
        '🚿 Tome banho com água morna ou fria, a água quente resseca!',
        '✂️ Apare as pontas a cada 3 meses para remover a parte danificada.',
        '🌡️ Sempre use protetor térmico antes do secador ou chapinha.',
        '🥑 Adicione algumas gotas de óleo natural nas pontas.'
      ]
    },
    'oleoso': {
      problema: 'Cabelo Oleoso (Raiz Pesada)',
      dicas: [
        '🧴 Use shampoo específico para raiz oleosa e evite passar condicionador na raiz.',
        '🚫 Água fria é sua amiga! Água quente estimula a produção de óleo.',
        '⏰ Tente lavar dia sim, dia não para equilibrar a oleosidade.',
        '💆‍♀️ Não massageie o couro cabeludo com força ao lavar.',
        '🌿 Extratos cítricos (como limão) ajudam no controle.'
      ]
    },
    'queda': {
      problema: 'Queda de Cabelo',
      dicas: [
        '💊 Se for intensa, procure um dermatologista ou tricologista.',
        '🥗 Mantenha uma alimentação rica em vitaminas e proteínas.',
        '💆‍♀️ Massageie o couro para ativar a circulação.',
        '🚫 Evite prender o cabelo muito apertado (rabos de cavalo, coques).',
        '💤 Cuide do seu sono e estresse, eles afetam a saúde capilar.'
      ]
    },
    'crescimento': {
      problemo: 'Acelerar o Crescimento',
      dicas: [
        '✂️ O corte regular (a cada 3 meses) elimina pontas duplas e ajuda no desenvolvimento.',
        '💆‍♀️ Faça massagem no couro cabeludo por 5 minutos 2x por semana.',
        '🥚 Invista em alimentos e suplementos ricos em biotina e zinco.',
        '💊 Se necessário, use tônicos capilares (com recomendação profissional).',
        '🚫 Reduza químicas agressivas.'
      ]
    },
    'cacheados': {
      problema: 'Cabelos Cacheados e Crespos',
      dicas: [
        '💧 Hidrate no mínimo 1x por semana. Cachos amam água!',
        '🚿 Use o condicionador para desembaraçar e enxágue com água fria no final.',
        '👐 Técnicas como a fitagem ajudam a definir melhor os cachos.',
        '🌙 Durma com touca ou fronha de cetim para evitar o frizz.',
        '✂️ Procure um profissional especializado em corte para cabelos cacheados.'
      ]
    }
  },
  
  // Dicas de Unhas
  dicas_unhas: {
    'menu': '💅 **Dicas de Unhas**\n\nSobre o que quer saber?\n\n• **Fracas** (quebrando fácil)\n• **Crescimento** (quer alongar)\n• **Micose** (prevenção)\n• **Durar Mais** (manicure intacta)',
    'fracas': {
      problema: 'Unhas Fracas e Quebradiças',
      dicas: [
        '💅 Use sempre uma base fortalecedora antes do esmalte.',
        '🥛 Consuma mais cálcio, ferro e vitaminas A e B.',
        '🧴 Hidrate suas cutículas diariamente com óleos específicos.',
        '🚫 Diga adeus à acetona e prefira removedores sem ela.',
        '⏰ Deixe as unhas respirarem por 1 semana a cada mês.'
      ]
    },
    'crescimento': {
      problema: 'Acelerar o Crescimento das Unhas',
      dicas: [
        '🥑 Mantenha uma dieta rica em biotina (ovos, nozes) e proteínas.',
        '💧 Unhas e cutículas hidratadas são mais flexíveis e fortes.',
        '💊 Beba bastante água e considere suplementação de Vitamina E.',
        '🧴 Óleo de rícino (mamona) na base da unha ajuda muito.',
        '✋ Massageie a base da unha (matriz) para estimular.'
      ]
    },
    'micose': {
      problema: 'Prevenir Micose e Fungos',
      dicas: [
        '🧼 Mantenha unhas e pés sempre secos após o banho.',
        '👟 Prefira sapatos arejados e não repita o mesmo calçado todo dia.',
        '🧴 Certifique-se de que o salão esteriliza todos os instrumentos.',
        '👣 Em locais públicos (piscinas/vestiários), use sempre chinelos.',
        '⚕️ Se notar qualquer alteração, procure um dermatologista imediatamente.'
      ]
    },
    'manicure': {
      problema: 'Como Fazer a Manicure Durar Mais',
      dicas: [
        '🧴 Use uma base de qualidade antes do esmalte para proteção e aderência.',
        '✨ Aplique um extra brilho (Top Coat) a cada 2 ou 3 dias.',
        '🧤 Use luvas para lavar louça ou mexer com produtos de limpeza.',
        '🚫 Evite banhos e água muito quente, isso amolece o esmalte.',
        '💅 Use camadas finas de esmalte de boa fixação.'
      ]
    }
  },
  
  // Dicas de Pele
  dicas_pele: {
    'menu': '🧖‍♀️ **Dicas de Skincare (Pele)**\n\nQual seu interesse?\n\n• **Rotina Básica** (o essencial)\n• **Pele Oleosa** (e cravos)\n• **Pele Seca** (e ressecamento)\n• **Acne** (espinhas)\n• **Manchas** (melasma)\n• **Anti-idade** (prevenção)',
    'rotina_basica': {
      tema: 'Rotina de Skincare: O Essencial',
      dicas: [
        '🧼 Manhã: Limpar, Hidratar, Protetor Solar (FPS).',
        '🌙 Noite: Demaquilar (se usou maquiagem), Limpar, Hidratar.',
        '✨ Esfolie suavemente a pele 1 ou 2 vezes por semana.',
        '💧 Use máscaras faciais de hidratação ou argila 1x por semana.',
        '💤 Durma bem! A pele se regenera durante o sono.'
      ]
    },
    'pele_oleosa': {
      tema: 'Cuidados para Pele Oleosa',
      dicas: [
        '🧴 Use produtos (limpeza, hidratante) com a indicação "oil-free".',
        '🧼 Lave o rosto 2x ao dia (manhã e noite). Excesso de lavagem piora.',
        '✨ Uma limpeza de pele profissional mensal ajuda muito a controlar cravos.',
        '🚫 Evite ao máximo produtos muito cremosos e pesados.',
        '💧 A pele oleosa também precisa de hidratação. Use séruns ou gel hidratante.'
      ]
    },
    'pele_seca': {
      tema: 'Cuidados para Pele Seca',
      dicas: [
        '💧 Invista em hidratação intensa com produtos que contenham Ácido Hialurônico.',
        '🌡️ Evite água muito quente no rosto, pois remove a barreira protetora da pele.',
        '🧴 Use hidratantes mais densos, com ceramidas e manteigas vegetais.',
        '💦 Beba pelo menos 2 litros de água por dia. Hidratação de dentro para fora!',
        '🥑 Máscaras faciais ricas em óleos e vitaminas.'
      ]
    },
    'acne': {
      tema: 'Tratamento de Acne e Espinhas',
      dicas: [
        '⚕️ Consulte sempre um dermatologista. O tratamento correto é essencial.',
        '🧼 Limpezas de pele focadas em acne ajudam a desinflamar.',
        '🚫 JAMAIS esprema ou cutuque as espinhas, isso causa cicatrizes e manchas.',
        '🧴 O Ácido Salicílico e Peróxido de Benzoíla são ativos comuns (use com moderação).',
        '🧽 Troque a fronha do travesseiro 2x por semana.'
      ]
    },
    'manchas': {
      tema: 'Manchas no Rosto (Melasma e Outras)',
      dicas: [
        '☀️ Protetor solar com cor é obrigatório TODOS OS DIAS, mesmo nublado.',
        '✨ Inclua Vitamina C na rotina da manhã para potencializar a proteção e clarear.',
        '🌙 Use ácidos despigmentantes à noite (ex: kójico ou glicólico) com indicação.',
        '💆‍♀️ Procedimentos como peelings clareadores e microagulhamento.',
        '🎯 Tratamentos a laser (realizado apenas por profissionais habilitados).'
      ]
    },
    'envelhecimento': {
      tema: 'Prevenção de Rugas e Linhas',
      dicas: [
        '☀️ O Protetor Solar é o melhor anti-idade que existe. Use e abuse!',
        '💧 Hidratação é a base para uma pele saudável e com menos linhas.',
        '🥗 Consuma alimentos ricos em antioxidantes (frutas vermelhas).',
        '🚭 Evite fumar, pois acelera muito o envelhecimento.',
        '💤 Dormir 7-8h de qualidade é essencial.',
        '🧴 Retinol ou Peptídeos à noite (comece devagar e sob orientação).'
      ]
    }
  },
  
  // Dicas de Maquiagem
  dicas_maquiagem: {
    'menu': '💄 **Dicas de Maquiagem (Make)**\n\nQue tipo de make você busca?\n\n• **Dia a Dia** (leve e natural)\n• **Festa Noite** (olhão e brilho)\n• **Iniciantes** (kit essencial)\n• **Produtos** (para durar e fixar)',
    'dia_a_dia': {
      tema: 'Maquiagem para o Dia a Dia 🌞',
      dicas: [
        '✨ Foco na Preparação: Lave, hidrate e use FPS.',
        '🧴 Base Leve: Opte por BB Cream ou base de cobertura baixa/média.',
        '👁️ Olhos Naturais: Máscara de cílios e um leve esfumado marrom opaco.',
        '🍎 Ar de Saúde: Blush cremoso ou em pó em tons pêssego/rosado.',
        '👄 Lábios Hidratados: Lip balm, lip tint ou gloss suave.'
      ]
    },
    'festa_noite': {
      tema: 'Maquiagem para Festa à Noite ✨',
      dicas: [
        '⏳ Longa Duração: Invista em primer e produtos de longa fixação.',
        '🎨 Olhos Marcantes: Esfumado preto, marrom ou use glitter/brilho.',
        '〰️ Delineado: Faça um delineado gráfico ou gatinho poderoso.',
        '✅ Cílios: Capriche na máscara ou use cílios postiços.',
        '💋 Boca: Escolha entre batom escuro (vermelho/vinho) ou nude com gloss.'
      ]
    },
    'iniciantes': {
      tema: 'Kit Essencial para Iniciantes 🎒',
      dicas: [
        '💧 Preparação: Hidratante e Protetor Solar.',
        '🧖‍♀️ Pele: Base e Corretivo no seu tom.',
        '🍎 Cor: Blush (pó ou cremoso).',
        '👁️ Olhos: Máscara de Cílios e uma Paleta de Sombras Nude.',
        '👄 Finalização: Batom/Gloss e Pó Compacto (para selar).'
      ]
    },
    'produtos': {
      tema: 'Produtos Curingas e Fixação 🛡️',
      dicas: [
        'primer.png Primer: Use antes da base para fechar poros e aumentar a duração.',
        'spray.png Fixador: Aplique no final para garantir que a make dure a noite toda.',
        'contorno.png Contorno: Use um tom mais frio para criar sombras e afinar o rosto.',
        'iluminador.png Iluminador: Nos pontos altos do rosto (têmporas, nariz, arco do cupido).',
        'esponja.png Esponja: Use úmida para um acabamento mais natural da base.'
      ]
    }
  },

  // ====================================================================
  // ⭐️ NOVO BLOCO SOLICITADO: DICAS DE DEPILAÇÃO E SOBRANCELHAS
  // ====================================================================
  dicas_extras: {
    'menu': '👁️‍🗨️ **Sobrancelhas e Depilação**\n\nQual tema te interessa mais?\n\n• **Depilação** (pré e pós-cuidados)\n• **Sobrancelhas** (design e preenchimento)',
    'depilacao': {
      tema: 'Dicas de Depilação (Corpo) 🌸',
      dicas: [
        '🧼 Preparação: Esfolie a pele 1 dia antes para evitar pelos encravados.',
        '🚫 Evite: Não aplique cremes ou óleos antes da depilação, a cera não adere.',
        '🧊 Pós-Depilação: Use compressas frias ou água termal para acalmar a pele.',
        '💧 Hidrate: Aplique um hidratante suave e sem álcool após 24h.',
        '☀️ Sol: Evite exposição solar por pelo menos 48h para não manchar a pele.'
      ]
    },
    'sobrancelhas': {
      tema: 'Sobrancelhas: Design e Cuidados',
      dicas: [
        '📏 Design: Sempre procure um profissional para o design ideal para seu rosto.',
        '❌ Não Cutuque: Evite tirar em casa, isso pode estragar o formato.',
        '🖌️ Preenchimento: Use sombra (opaca!) ou lápis de forma suave, sem pesar.',
        '✨ Destaque: Aplique iluminador abaixo do arco para levantar o olhar.',
        '🌱 Crescimento: Use séruns (ou óleo de rícino) para estimular o crescimento.'
      ]
    }
  },
  // ====================================================================
  // 🌸 NOVO BLOCO: MASSAGENS E ESTÉTICA
  // ====================================================================
  dicas_estetica: {
    'menu': '💆‍♀️ **Dicas de Massagens e Estética**\n\nEm qual área você tem interesse?\n\n• **Massagem** (tipos e benefícios)\n• **Estética Corporal** (modeladora, celulite)\n• **Estética Facial** (limpeza de pele, rejuvenescimento)',
    
    'massagem': {
      tema: 'Massagens: Tipos e Benefícios Terapêuticos/Estéticos',
      dicas: [
        '💧 **Drenagem Linfática:** Ajuda a eliminar o excesso de líquidos e toxinas, reduzindo inchaço e celulite. Indicada também no pós-operatório.',
        '💪 **Massagem Modeladora:** Com movimentos vigorosos, auxilia na redução de medidas, combate a flacidez, melhora a circulação sanguínea e o contorno corporal.',
        '🧘‍♀️ **Massagem Relaxante (Sueca):** Ideal para aliviar tensões musculares, estresse e ansiedade, promovendo relaxamento mental e físico.',
        '🔥 **Massagem com Pedras Quentes:** Proporciona relaxamento profundo e alívio de dores musculares e articulares devido ao calor.',
        '🤕 **Massagem Profunda (Deep Tissue):** Focada em camadas musculares mais profundas para aliviar dores crônicas e desfazer nós musculares.'
      ]
    },
    
    'corporal': {
      tema: 'Tratamentos de Estética Corporal',
      dicas: [
        '✨ **Combate à Celulite/Gordura:** Além da Modeladora/Drenagem, aparelhos como Criolipólise, Radiofrequência e Carboxiterapia são muito procurados.',
        '🌿 **Detox Corporal:** Ajuda a eliminar toxinas e reduzir inchaços através de esfoliação e termoterapia.',
        '🛡️ **Flacidez:** Radiofrequência e Ultrassom Microfocado (como o Ultraformer) estimulam a produção de colágeno para firmar a pele.',
        '🩹 **Estrias/Cicatrizes:** Tratamentos como Microagulhamento, Peeling Corporal e Laser podem melhorar a textura da pele e a aparência das marcas.',
        '🚿 **Peeling Corporal:** Remove células mortas e suaviza manchas, deixando a pele mais uniforme e macia.'
      ]
    },
    
    'facial': {
      tema: 'Tratamentos de Estética Facial',
      dicas: [
        '🧼 **Limpeza de Pele:** Procedimento fundamental para remover impurezas, células mortas e cravos, deixando a pele mais limpa e saudável.',
        '💉 **Rejuvenescimento:** Botox (Toxina Botulínica) para rugas, Ácido Hialurônico (Preenchimento) para sulcos e Skinbooster para hidratação profunda.',
        '⚡ **Flacidez Facial:** Tecnologias como Radiofrequência, Microagulhamento e Laser estimulam o colágeno e a elastina para firmar a pele.',
        '✨ **Melasma e Manchas:** Peelings Químicos/Diamante, Microagulhamento e Laser (ex: Lavieen) são usados para clareamento e renovação celular.',
        '💆‍♀️ **Rotina Essencial:** Lembre-se sempre de Limpar, Hidratar e usar Protetor Solar (FPS) diariamente!'
      ]
    }
  },
  // ====================================================================

  // EXEMPLOS VISUAIS
  exemplos_visuais: {
    // Mantido como no código anterior
    cabelo: {
      titulo: 'Inspirações de Cortes de Cabelo 💇‍♀️',
      opcoes: [
        'Curto Feminino (Pixie, Bob)',
        'Longo e Ondulado',
        'Repicado e com Volume',
        'Cortes para Cabelos Cacheados'
      ],
      link: '🔗 Veja inspirações de cortes: https://www.pinterest.com/cabelo_inspiracoes' // Link Atualizado
    },
    unhas: {
      titulo: 'Inspirações de Unhas Decoradas 💅',
      opcoes: [
        'Unhas com glitter e encapsuladas',
        'Francesinha moderna',
        'Nail art abstrata e marmorizada',
        'Unhas decoradas simples'
      ],
      link: '🔗 Veja ideias e tutoriais de unhas: https://www.instagram.com/unhas_ideias' // Link Atualizado
    },
    maquiagem: {
      titulo: 'Inspirações de Maquiagem ✨',
      opcoes: [
        'Maquiagem para festa à noite (esfumado e dramático)',
        'Maquiagem natural e elegante para o dia',
        'Tendências (Glitter, Neon)',
        'Maquiagem para pele madura'
      ],
      link: '🔗 Veja tutoriais e looks de maquiagem: https://www.youtube.com/maquiagem_looks' // Link Atualizado
    },
    // NOVO: Estética
    estetica: {
      titulo: 'Inspirações de Estética e Bem-Estar 💆‍♀️',
      opcoes: [
        'Dicas de Massagem e Relaxamento',
        'Rotinas de Skincare Facial',
        'Resultados de Modeladora e Drenagem'
      ],
      link: '🔗 Veja inspirações de tratamentos estéticos: https://www.instagram.com/estetica_bemestar' // Link Novo
    }
  }
};

// Histórico de conversas
const conversas = {};

// Função para processar mensagens
function processarMensagem(mensagem, sessionId) {
  const msg = mensagem.toLowerCase().trim();
  
  if (!conversas[sessionId]) {
    conversas[sessionId] = { mensagens: [], contexto: null };
  }
  
  conversas[sessionId].mensagens.push({
    tipo: 'usuario',
    texto: mensagem,
    timestamp: new Date()
  });
  
  let resposta = '';
  
  // ====================================================================
  // 💖 LÓGICA DE RESPOSTAS (Mais Humana e Direta)
  // ====================================================================

  // SAUDAÇÕES
  if (msg.match(/^(oi|olá|ola|hey|opa|e ai|eai|bom dia|boa tarde|boa noite)$/)) {
    resposta = '👋 Olá! Seja bem-vindo(a) ao **AgendaAI**!\n\n';
    resposta += 'Aqui, você pode agendar seus serviços de beleza ou encontrar dicas incríveis.\n\n';
    resposta += 'Posso te ajudar com:\n';
    resposta += '📱 **Sobre o AgendaAI** (Cadastrar, Agendar, Funcionalidades)\n';
    resposta += '✨ **Dicas de Beleza** (Cabelo, Unhas, Pele, Maquiagem, Massagens e Estética!)\n'; // Texto atualizado
    resposta += '📸 **Inspirações Visuais** (Fotos de Cortes, Unhas e Makes)\n\n';
    resposta += 'Qual o tema que você gostaria de explorar? 😊';
  }
  
  // SOBRE O SISTEMA
  else if (msg.match(/o que é|que é o|sobre o|explica|agendaai|sistema|plataforma|funcionalidades/)) {
    resposta = '🚀 **Sobre o AgendaAI**\n\n';
    resposta += conhecimento.sistema.descricao + '\n\n';
    resposta += '**Para Empresas (Salões/Clínicas):**\n';
    conhecimento.sistema.funcionalidades.empresas.forEach(f => {
      resposta += `• ${f}\n`;
    });
    resposta += '\n**Para Clientes:**\n';
    conhecimento.sistema.funcionalidades.clientes.forEach(f => {
      resposta += `• ${f}\n`;
    });
    resposta += '\n💡 Digite "cadastrar" ou "agendar" para saber mais detalhes!';
  }
  
  // CADASTRAR EMPRESA
  else if (msg.match(/cadastr(ar|o)|empresa|meu salão|registr(ar|o)|tenho empresa/)) {
    const d = conhecimento.sistema.cadastro_empresa;
    resposta = `🏢 **${d.titulo}**\n\nÉ rápido e totalmente gratuito!\n\n`;
    d.passos.forEach(p => {
      resposta += `${p}\n`;
    });
    resposta += '\n**🎯 O que você precisa ter:**\n';
    d.campos.forEach(c => {
      resposta += `✅ ${c}\n`;
    });
  }
  
  // COMO AGENDAR
  else if (msg.match(/como ag(endar|endo)|marcar|fazer agendamento|quero agendar|reservar/)) {
    const d = conhecimento.sistema.processo_agendamento;
    resposta = `📅 **${d.titulo}**\n\nÉ simples e você resolve em minutos:\n\n`;
    d.passos.forEach(p => {
      resposta += `${p}\n`;
    });
    resposta += '\n✨ É só buscar seu serviço e profissional favorito na plataforma!';
  }
  
  // DICAS DE CABELO
  else if (msg.match(/cabelo|capilar|fios/)) {
    const dicas = conhecimento.dicas_cabelos;
    if (msg.match(/seco|ressecado|sem brilho/)) {
      resposta = `💇‍♀️ **Dicas para ${dicas.seco.problema}:**\n\n`;
      dicas.seco.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/oleoso|gorduroso/)) {
      resposta = `💇‍♀️ **Dicas para ${dicas.oleoso.problema}:**\n\n`;
      dicas.oleoso.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/queda|caindo/)) {
      resposta = `💇‍♀️ **Dicas para ${dicas.queda.problema}:**\n\n`;
      dicas.queda.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/crescer|crescimento/)) {
      resposta = `💇‍♀️ **Dicas para ${dicas.crescimento.problemo}:**\n\n`;
      dicas.crescimento.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/cacheado|cacho|crespo/)) {
      resposta = `💇‍♀️ **Dicas para ${dicas.cacheados.problema}:**\n\n`;
      dicas.cacheados.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else {
      resposta = dicas.menu;
    }
  }
  
  // DICAS DE UNHAS
  else if (msg.match(/unha|manicure|pedicure|esmalt(e|ar)/)) {
    const dicas = conhecimento.dicas_unhas;
    if (msg.match(/fraca|quebra/)) {
      resposta = `💅 **Dicas para ${dicas.fracas.problema}:**\n\n`;
      dicas.fracas.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/crescer|crescimento/)) {
      resposta = `💅 **Dicas para ${dicas.crescimento.problema}:**\n\n`;
      dicas.crescimento.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/micose|fungo|infecç(ão|ao)/)) {
      resposta = `💅 **Dicas para ${dicas.micose.problema}:**\n\n`;
      dicas.micose.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/durar|conservar|extra brilho/)) {
      resposta = `💅 **Dicas para ${dicas.manicure.problema}:**\n\n`;
      dicas.manicure.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else {
      resposta = dicas.menu;
    }
  }
  
  // DICAS DE PELE
  else if (msg.match(/pele|rosto|facial|limpeza de pele|skincare/)) {
    const dicas = conhecimento.dicas_pele;
    if (msg.match(/rotina|basica|começar|essencial/)) {
      resposta = `🧖‍♀️ **${dicas.rotina_basica.tema}:**\n\n`;
      dicas.rotina_basica.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/oleosa|oleoso|cravo/)) {
      resposta = `🧖‍♀️ **${dicas.pele_oleosa.tema}:**\n\n`;
      dicas.pele_oleosa.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/seca|ressecada/)) {
      resposta = `🧖‍♀️ **${dicas.pele_seca.tema}:**\n\n`;
      dicas.pele_seca.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/acne|espinha/)) {
      resposta = `🧖‍♀️ **${dicas.acne.tema}:**\n\n`;
      dicas.acne.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/mancha|melasma|sol/)) {
      resposta = `🧖‍♀️ **${dicas.manchas.tema}:**\n\n`;
      dicas.manchas.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/envelhecimento|ruga|anti|idade/)) {
      resposta = `🧖‍♀️ **${dicas.envelhecimento.tema}:**\n\n`;
      dicas.envelhecimento.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else {
      resposta = dicas.menu;
    }
  }

  // DICAS DE MAQUIAGEM
  else if (msg.match(/maquiagem|make|maquilhagem|maquiar/)) {
    const dicas = conhecimento.dicas_maquiagem;
    if (msg.match(/dia|dia a dia|natural|simples/)) {
      resposta = `💄 **${dicas.dia_a_dia.tema}:**\n\n`;
      dicas.dia_a_dia.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/festa|noite|balada|glamour|escura/)) {
      resposta = `💄 **${dicas.festa_noite.tema}:**\n\n`;
      dicas.festa_noite.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/iniciante|basico|kit|começar/)) {
      resposta = `💄 **${dicas.iniciantes.tema}:**\n\n`;
      dicas.iniciantes.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/produto|fixaç(ão|ao)|durar|primer|iluminador/)) {
      resposta = `💄 **${dicas.produtos.tema}:**\n\n`;
      dicas.produtos.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else {
      resposta = dicas.menu;
    }
  }

  // DICAS EXTRAS: DEPILAÇÃO E SOBRANCELHAS
  else if (msg.match(/depilaç(ão|ao)|sobrancelha|design|depilar|buço|micro/)) {
    const dicas = conhecimento.dicas_extras;
    if (msg.match(/depilaç(ão|ao)|depilar|cera|pelo/)) {
      resposta = `🌸 **${dicas.depilacao.tema}:**\n\n`;
      dicas.depilacao.dicas.forEach(dica => resposta += `• ${dica}\n`);
    }
    else if (msg.match(/sobrancelha|design|preencher|micro/)) {
      resposta = `👁️‍🗨️ **${dicas.sobrancelhas.tema}:**\n\n`;
      dicas.sobrancelhas.dicas.forEach(dica => resposta += `• ${dica}\n`);
    }
    else {
      resposta = dicas.menu;
    }
  }
  
  // DICAS DE MASSAGENS E ESTÉTICA (NOVO!)
  else if (msg.match(/massagem|estetica|corporal|facial|modeladora|drenagem|limpeza de pele/)) {
    const dicas = conhecimento.dicas_estetica;
    if (msg.match(/modeladora|drenagem|relaxante|massag(em|ens)/)) {
      resposta = `💆‍♀️ **${dicas.massagem.tema}:**\n\n`;
      dicas.massagem.dicas.forEach(dica => resposta += `${dica}\n`);
    }
    else if (msg.match(/corporal|celulite|gordura|flacidez|estrias|detox/)) {
      resposta = `🌸 **${dicas.corporal.tema}:**\n\n`;
      dicas.corporal.dicas.forEach(dica => resposta += `• ${dica}\n`);
    }
    else if (msg.match(/facial|rejuvenescimento|limpeza de pele|botox|preenchimento/)) {
      resposta = `🧖‍♀️ **${dicas.facial.tema}:**\n\n`;
      dicas.facial.dicas.forEach(dica => resposta += `• ${dica}\n`);
    }
    else {
      resposta = dicas.menu;
    }
  }

  // EXEMPLOS VISUAIS
  else if (msg.match(/exemplo|foto|inspiraç(ão|ao|oes)|visual|ver como é|galeria/)) {
    const exemplos = conhecimento.exemplos_visuais;
    
    if (msg.match(/cabelo|corte|cor|penteado/)) {
      const d = exemplos.cabelo;
      resposta = `✨ **${d.titulo}**\n\nPara te inspirar, temos:\n`;
      d.opcoes.forEach(opt => resposta += `• ${opt}\n`);
      resposta += `\n${d.link}`; 
    } 
    else if (msg.match(/unha|manicure|decorada|nail art/)) {
      const d = exemplos.unhas;
      resposta = `✨ **${d.titulo}**\n\nPara ideias de nail art, temos:\n`;
      d.opcoes.forEach(opt => resposta += `• ${opt}\n`);
      resposta += `\n${d.link}`;
    } 
    else if (msg.match(/maquiagem|make|maquilhagem|maquiar/)) {
      const d = exemplos.maquiagem;
      resposta = `✨ **${d.titulo}**\n\nPara ver makes de festa e dia a dia, confira:\n`;
      d.opcoes.forEach(opt => resposta += `• ${opt}\n`);
      resposta += `\n${d.link}`;
    }
    else if (msg.match(/estetica|massagem|facial|corporal|bem-estar/)) { // <--- NOVO
      const d = exemplos.estetica;
      resposta = `✨ **${d.titulo}**\n\nPara te ajudar a escolher seu tratamento, confira:\n`;
      d.opcoes.forEach(opt => resposta += `• ${opt}\n`);
      resposta += `\n${d.link}`;
    }
    else {
      resposta = '🖼️ **Exemplos Visuais de Beleza**\n\n';
      resposta += 'Gostaria de ver inspirações de:\n';
      resposta += '• **Exemplos de Cabelo**\n';
      resposta += '• **Exemplos de Unhas**\n';
      resposta += '• **Exemplos de Maquiagem**\n';
      resposta += '• **Inspirações de Estética**\n\n'; // <--- NOVO
      resposta += 'É só digitar o que procura! 😊';
    }
  }

  // AJUDA
  else if (msg.match(/ajuda|help|menu|opções|o que posso perguntar/)) {
    resposta = '❓ **Menu de Ajuda**\n\n';
    resposta += '**Sobre o AgendaAI:**\n';
    resposta += '• "O que é o AgendaAI?"\n';
    resposta += '• "Como cadastrar?"\n';
    resposta += '• "Como agendar?"\n\n';
    resposta += '**Dicas de Beleza (Geral):**\n';
    resposta += '• "Dicas de cabelo" (ou unhas, pele, maquiagem)\n';
    resposta += '• "Depilação" ou "Sobrancelhas"\n';
    resposta += '• "**Massagens**" ou "**Estética Facial**"\n'; // <--- NOVO
    resposta += '• "Exemplos de corte de cabelo" (ou unhas, make)';
  }
  
  // DESPEDIDA
  else if (msg.match(/tchau|adeus|até|obrigad/)) {
    resposta = '👋 Foi um prazer ajudar! Volte sempre que precisar de beleza e agendamentos.\n\n';
    resposta += '✨ O AgendaAI está aqui para facilitar sua vida! 💕';
  }
  
  // PADRÃO
  else {
    resposta = '🤔 Puxa, não entendi muito bem o que você quis dizer.\n\n';
    resposta += 'Eu sou especialista em:\n';
    resposta += '📱 Informações sobre o **AgendaAI** (Cadastro, Agendamento)\n';
    resposta += '✨ Dicas de **Cabelo, Unhas, Pele e Maquiagem**\n';
    resposta += '🌸 Dicas de **Depilação e Sobrancelhas**\n';
    resposta += '💆‍♀️ Dicas de **Massagens e Estética**\n\n'; // Texto atualizado
    resposta += 'Digite "ajuda" para ver todas as opções! 😊';
  }
  
  conversas[sessionId].mensagens.push({
    tipo: 'bot',
    texto: resposta,
    timestamp: new Date()
  });
  
  return resposta;
}

// ENDPOINTS (Permanecem os mesmos)
app.post('/api/chat', (req, res) => {
  const { mensagem, sessionId } = req.body;
  
  if (!mensagem) {
    return res.status(400).json({ erro: 'Mensagem é obrigatória' });
  }
  
  const sessionIdFinal = sessionId || Date.now().toString();
  const resposta = processarMensagem(mensagem, sessionIdFinal);
  
  res.json({
    resposta,
    sessionId: sessionIdFinal,
    timestamp: new Date()
  });
});

app.get('/api/historico/:sessionId', (req, res) => {
  const { sessionId } = req.params;
  const conversa = conversas[sessionId];
  
  if (!conversa) {
    return res.status(404).json({ erro: 'Sessão não encontrada' });
  }
  
  res.json(conversa);
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    sistema: 'AgendaAI Chatbot',
    timestamp: new Date() 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 AgendaAI Chatbot rodando na porta ${PORT}`);
  console.log(`📡 API disponível em http://localhost:${PORT}/api/chat`);
});