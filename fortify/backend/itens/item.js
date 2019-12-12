const restful = require('node-restful')
const mongoose = restful.mongoose

const itemSchema = new mongoose.Schema({
    projeto: { type: String },
    repositorios: { type: Array },
    criticos: { type: Number },
    altos: { type: Number }
},
    {
        timestamps: true,
    })

module.exports = restful.model('Item', itemSchema)