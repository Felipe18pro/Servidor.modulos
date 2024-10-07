// controllers/livroController.js
const Livro = require("../models/livroModel");

async function criarLivro(req, res) {
  try {
    const { titulo, autor, ano, genero } = req.body;
    const novoLivro = new Livro({ titulo, autor, ano, genero });
    await novoLivro.save();
    res.status(201).json({ mensagem: "Livro criado com sucesso", livro: novoLivro });
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao criar livro", erro: erro.message });
  }
}

async function obterLivros(req, res) {
  try {
    const livros = await Livro.find();
    res.status(200).json(livros);
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao obter livros", erro: erro.message });
  }
}

async function atualizarLivro(req, res) {
  try {
    const { id } = req.params;
    const { titulo, autor, ano, genero } = req.body;
    const livroAtualizado = await Livro.findByIdAndUpdate(
      id,
      { titulo, autor, ano, genero },
      { new: true, runValidators: true }
    );
    if (livroAtualizado) {
      res.status(200).json({ mensagem: "Livro atualizado com sucesso", livro: livroAtualizado });
    } else {
      res.status(404).json({ mensagem: "Livro não encontrado" });
    }
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao atualizar livro", erro: erro.message });
  }
}

async function deletarLivro(req, res) {
  try {
    const { id } = req.params;
    const livroDeletado = await Livro.findByIdAndDelete(id);
    if (livroDeletado) {
      res.status(200).json({ mensagem: "Livro deletado com sucesso", livro: livroDeletado });
    } else {
      res.status(404).json({ mensagem: "Livro não encontrado" });
    }
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao deletar livro", erro: erro.message });
  }
}

module.exports = { criarLivro, obterLivros, atualizarLivro, deletarLivro };
