const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Petshop = new Schema({
  name: String,
  logo: String,
  category: String,
  featured: Number,
  location: Object,
  recipient_id: String,

})

module.exports = mongoose.model('Petshop', Petshop)
