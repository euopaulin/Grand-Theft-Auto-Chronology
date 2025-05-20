const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configurações
app.use(cors());
app.use(bodyParser.json());

// Conexão com MongoDB
const mongoURI = 'mongodb://localhost:27017/gta-timeline-db'; // troque pelo seu MongoDB URI
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('🟢 Conectado ao MongoDB'))
.catch(err => console.error('🔴 Erro na conexão MongoDB:', err));

// Modelo exemplo
const EventoSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  data: Date,
});

const Evento = mongoose.model('Evento', EventoSchema);

// Rotas da API

// Listar todos os eventos
app.get('/eventos', async (req, res) => {
  try {
    const eventos = await Evento.find();
    res.json(eventos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Criar novo evento
app.post('/eventos', async (req, res) => {
  const evento = new Evento({
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    data: req.body.data,
  });

  try {
    const novoEvento = await evento.save();
    res.status(201).json(novoEvento);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
