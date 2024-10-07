const mongoose = require("mongoose")

const esquemaLivro = new mongoose.Schema({
    titulo:{type:String, required:true},
    autor:{type:String, required:true},
    ano:{type:Number, required:true},
    genero:{type:String, required:true}
})

const Livro = mongoose.model("Livro", esquemaLivro);

module.exports = Livro