const express = require("express");
const mongoose = require("mongoose");
const livroRoutes = require("./routes/livroRoutes");

const app = express();
app.use(express.json());

// Conectando ao MongoDB
mongoose
  .connect("mongodb://localhost:27017/livraria")
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((erro) => console.error("Erro ao conectar ao MongoDB:", erro));

// Usando as rotas de livros
app.use("/api", livroRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta: http://localhost:${port}`);
});
