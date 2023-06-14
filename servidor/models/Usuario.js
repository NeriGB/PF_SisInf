const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Usuario', UsuarioSchema);