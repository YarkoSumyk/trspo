const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
})
module.exports = mongoose.model('Users', UserSchema)