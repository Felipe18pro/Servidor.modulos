const express = require("express");
const { criarLivro, obterLivros, atualizarLivro, deletarLivro } = require("../controllers/livroController");

const router = express.Router();

router.post("/livros", criarLivro);
router.get("/livros", obterLivros);
router.put("/livros/:id", atualizarLivro);
router.delete("/livros/:id", deletarLivro);

module.exports = router;
