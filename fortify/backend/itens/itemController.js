const axios = require('axios')

const Item_ = require('./item')

module.exports = {
    async index(req, res) {

        const items = await Item_.find();

        return res.json({ items })
    },
}