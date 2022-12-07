const mongoose = require("mongoose")
const {Schema} = mongoose

const taskSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    hora: {
        type: String,
        required: true,
    },
    ancho: {
        type: Number,
        required: true,
    },
    largo: {
        type: Number,
        required: true,
    },
    alto: {
        type: Number,
        required: true,
    },
    peso: {
        type: Number,
        required: true,
    },
    cityin: {
        type: String,
        required: true,
    },
    addressin: {
        type: String,
        required: true,
    },
    nameout: {
        type: String,
        required: true,
    },
    idout:{
        type: Number,       //Ojo necesita  otro require,ej max, min
        required: true,
    },
    cityout: {
        type: String,       
        required: true,
    },
    addressout: {
        type: String,
        required: true,
    },
    stateorder: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
}, {
    collection: 'tasks'
})
    
module.exports = mongoose.model('Task', taskSchema)
