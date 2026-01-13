const express = require('express');
const QRCode = require('qrcode');

const app = express();

app.get('/', async (req, res) => {
  const { text, size = 300 } = req.query;

  if (!text) {
    return res.status(400).json({ error: 'Parâmetro text é obrigatório' });
  }

  try {
    const qr = await QRCode.toDataURL(text, {
      width: Number(size),
      margin: 1,
    });

    const img = qr.split(',')[1];
    const buffer = Buffer.from(img, 'base64');

    res.setHeader('Content-Type', 'image/png');
    res.send(buffer);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao gerar QR Code' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
