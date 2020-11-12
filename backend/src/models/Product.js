const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Product = new Schema({
	petshop_id: {
		type: Schema.Types.ObjectId,
		ref: 'Petshop',
	},
	name: String,
	cover: String,
	price: Number,
	rating: Number,
})

module.exports = mongoose.model('Product', Product)
