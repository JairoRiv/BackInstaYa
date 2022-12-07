const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ordenSchema = new Schema({
    
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    }
})
    
module.exports = mongoose.model('Orden', ordenSchema)
