// server/index.js
//npm init -y
//npm install express dotenv express-rate-limit helmet body-parser nodemailer
const cors = require('cors');
require('dotenv').config();
const express = require('express');


const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // ou use @sendgrid/mail / twilio

const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:5502'
}));

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

// rate limiter
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 10, // max 10 requests per window per IP
});
app.use('/api/contact', limiter);

// transporter nodemailer (exemplo SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

function validatePayload({ name, email, message }) {
  if (!name || name.length < 3) return 'Nome inválido';
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) return 'Email inválido';
  if (!message || message.length < 2) return 'Mensagem muito curta';
  return null;
}

app.post('/api/contact', async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, message } = req.body;
    const err = validatePayload({ name, email, message });
    if (err) return res.status(400).json({ ok: false, error: err });

    // sanitize minimal (ex.: strip tags) antes de persistir/exibir
    const safeMessage = String(message).replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // enviar email ao dono do portfólio
    await transporter.sendMail({
      from: `"Site Contact" <${process.env.SMTP_FROM}>`,
      to: process.env.OWNER_EMAIL,
      subject: `Contato de ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${safeMessage}`
      // ou html: ...
    });

    // Mensangem de confirmação
    await transporter.sendMail({
  from: `"Phorma" <${process.env.SMTP_FROM}>`,
  to: email,
  subject: `Confirmação de Recebimento de Mensagem`,
  text: `Prezado(a) ${name},

  Agradecemos o seu contato com a Phorma, referência em design de interiores e mobiliário.

  Informamos que recebemos sua mensagem e nossa equipe entrará em contato o mais breve possível para atendê-lo(a).

  Atenciosamente,
  Equipe Phorma`
  });


 
    return res.json({ ok: true });
  } catch (e) {
    console.error('contact error', e);
    return res.status(500).json({ ok: false, error: 'Erro interno' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server listening on', PORT));
