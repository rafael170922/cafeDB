// index.js

// Importa as bibliotecas
const express = require('express');         // Framework para criar a API
const cors = require('cors');               // Permite conexões externas (ex: do app mobile)
const bodyParser = require('body-parser');  // Lê dados do corpo da requisição
const { PrismaClient } = require('@prisma/client'); // Conecta ao banco via Prisma

const app = express();              // Inicializa o app Express
const prisma = new PrismaClient();  // Inicializa o Prisma

// Middlewares (ajudantes)
app.use(cors());                    // Libera acesso externo
app.use(bodyParser.json());         // Faz parse do JSON enviado no body

// ===== ROTAS (Endpoints da API) =====

// GET /users → lista todos os usuários
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();   // Busca todos no banco
  res.json(users);                              // Retorna em JSON
});

// POST /users → cria um novo usuário
app.post('/users', async (req, res) => {
  const { username, password } = req.body;      // Lê dados do body
  const user = await prisma.user.create({       // Cria no banco
    data: { username, password }
  });
  res.json(user);                               // Retorna o usuário criado
});

// GET /users/:id → busca um usuário por ID
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) }
  });
  res.json(user);
});

// PUT /users/:id → atualiza um usuário por ID
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: { username, password }
  });
  res.json(user);
});

// DELETE /users/:id → remove um usuário
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.user.delete({
    where: { id: Number(id) }
  });
  res.json({ message: 'Usuário deletado' });
});

// Inicializa o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
