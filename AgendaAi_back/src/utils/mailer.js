import nodemailer from "nodemailer"

/**
 * Envia um email de boas-vindas com o design profissional AgendaAI.
 * @param {string} toEmail - O endereço de email do destinatário.
 * @param {string} userName - O nome do usuário/empresa.
 */
export const sendWelcomeEmail = async (toEmail, userName) => {
    try {
        // 1. Configurar o Transportador
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 2. Conteúdo HTML com o novo design moderno
        const emailHtmlContent = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bem-vindo ao AgendaAI</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: linear-gradient(135deg, #648f80 0%, #4a6b61 100%); padding: 40px 20px;">
                <tr>
                    <td align="center">
                        <table class="container" width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background: white; border-radius: 20px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); overflow: hidden;">
                            
                            <!-- Header -->
                            <tr>
                                <td style="background: linear-gradient(135deg, #648f80 0%, #4a6b61 100%); padding: 40px 30px; text-align: center; position: relative;">
                                    <h1 style="font-size: 32px; font-weight: bold; color: white; margin: 0 0 10px 0; letter-spacing: 2px;">
                                        AgendaAI ✨
                                    </h1>
                                    <p style="color: rgba(255, 255, 255, 0.9); font-size: 16px; margin: 0;">
                                        Seja Bem-vindo(a)!
                                    </p>
                                </td>
                            </tr>
                            
                            <!-- Content -->
                            <tr>
                                <td style="padding: 40px 30px;">
                                    <p style="font-size: 24px; color: #333; margin: 0 0 10px 0;">
                                        Olá, <span style="color: #648f80; font-weight: bold;">${userName}</span>!
                                    </p>
                                    
                                    <p style="color: #666; line-height: 1.8; margin: 20px 0 30px; font-size: 16px;">
                                        É um prazer tê-lo(a) a bordo. Seu cadastro no <strong>AgendaAI</strong> foi realizado com sucesso e a transformação na gestão da sua clínica de estética está prestes a começar.
                                    </p>
                                    
                                    <div style="text-align: center; font-size: 20px; font-weight: 600; color: #4a6b61; margin-bottom: 30px; padding: 15px; background: linear-gradient(135deg, rgba(100, 143, 128, 0.1), rgba(74, 107, 97, 0.1)); border-radius: 10px;">
                                        ✨ Gestão Simples, Elegante e Inteligente!
                                    </div>
                                    
                                    <!-- Features -->
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 30px 0;">
                                        <tr>
                                            <td style="padding: 15px; background: #f8f9ff; border-radius: 12px; margin-bottom: 20px;">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td width="30" valign="top" style="font-size: 24px;">🕐</td>
                                                        <td style="padding-left: 15px;">
                                                            <h3 style="color: #333; font-size: 18px; margin: 0 0 5px 0;">Agendamentos 24/7</h3>
                                                            <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 0;">Suas clientes marcam a qualquer hora, de qualquer lugar.</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr><td style="height: 20px;"></td></tr>
                                        <tr>
                                            <td style="padding: 15px; background: #f8f9ff; border-radius: 12px; margin-bottom: 20px;">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td width="30" valign="top" style="font-size: 24px;">💆‍♀️</td>
                                                        <td style="padding-left: 15px;">
                                                            <h3 style="color: #333; font-size: 18px; margin: 0 0 5px 0;">Foco no Bem-Estar</h3>
                                                            <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 0;">Menos burocracia, mais tempo para cuidar da beleza.</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr><td style="height: 20px;"></td></tr>
                                        <tr>
                                            <td style="padding: 15px; background: #f8f9ff; border-radius: 12px;">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td width="30" valign="top" style="font-size: 24px;">📊</td>
                                                        <td style="padding-left: 15px;">
                                                            <h3 style="color: #333; font-size: 18px; margin: 0 0 5px 0;">Controle Total</h3>
                                                            <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 0;">Gestão unificada de horários, serviços e histórico de clientes.</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    <!-- CTA Button -->
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 30px 0;">
                                        <tr>
                                            <td align="center">
                                                <a href="[LINK PARA O SEU APP/DASHBOARD]" 
                                                   style="display: inline-block; 
                                                          padding: 18px 40px; 
                                                          background: linear-gradient(135deg, #648f80 0%, #4a6b61 100%); 
                                                          color: white; 
                                                          text-align: center; 
                                                          text-decoration: none; 
                                                          border-radius: 12px; 
                                                          font-size: 18px; 
                                                          font-weight: 600;
                                                          box-shadow: 0 10px 25px rgba(100, 143, 128, 0.3);">
                                                    🚀 Acessar Meu Painel e Começar
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            
                            <!-- Footer -->
                            <tr>
                                <td style="background: #f8f9ff; padding: 25px 30px; text-align: center; border-top: 1px solid #eee;">
                                    <p style="color: #666; font-size: 14px; margin: 0;">
                                        Precisa de ajuda? Acesse nossa <a href="#" style="color: #648f80; text-decoration: none; font-weight: 600;">Central de Suporte</a><br>
                                        ou responda a este e-mail. Estamos aqui para você! 💜
                                    </p>
                                </td>
                            </tr>
                            
                        </table>
                        
                        <!-- Bottom Copyright -->
                        <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin-top: 20px;">
                            <tr>
                                <td align="center" style="padding: 20px 0;">
                                    <p style="color: rgba(255, 255, 255, 0.8); font-size: 12px; margin: 0;">
                                        Este é um email de notificação. © 2025 AgendaAI. Organização e Beleza em um clique.
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        `;

        // 3. Enviar o Email
        await transporter.sendMail({
            from: `"AgendaAI" <${process.env.EMAIL_USER}>`,
            to: toEmail,
            subject: "Bem-vindo(a) ao AgendaAI! 🎉 Sua gestão inteligente e elegante começou.",
            html: emailHtmlContent,
        });

        console.log(`Email de boas-vindas enviado com sucesso para: ${toEmail}`);

    } catch (error) {
        console.error("Erro ao enviar email de boas-vindas:", error);
        // Em produção, você pode relançar o erro ou lidar com ele de forma mais robusta
        // throw new Error("Falha no envio do email.");
    }
};