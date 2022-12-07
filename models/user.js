const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    
    password: {
        type: String,
        required: true,
    }
    
// })

// userSchema.set('toJSON', {
//     transform: (document, returnedObject) => {
//         delete returnedObject.passwordHash
//     }
}, {
    collection: 'users'
})
    
module.exports = mongoose.model('User', userSchema)