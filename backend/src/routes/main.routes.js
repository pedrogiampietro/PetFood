const express = require('express')
const router = express.Router()

const Petshop = require('../models/Petshop')
const Product = require('../models/Product')

const createSplitTransaction = require('../services/pagarmeGateway')
	.createSplitTransaction

router.get('/petshops', async (req, res) => {
	try {
		const petshops = await Petshop.find()
		res.json({ error: false, petshops })
	} catch (error) {
		res.json({ error: true, message: error.message })
	}
})

router.get('/petshop/:id', async (req, res) => {
	try {
		const petshop = await Petshop.findById(req.params.id)
		let products = await Product.find({
			petshop_id: petshop._id,
		}).populate('petshop_id', 'recipient_id')

		res.json({ error: false, petshop: { ...petshop._doc, products } })
	} catch (error) {
		res.json({ error: true, message: error.message })
	}
})

router.post('/purchase', async (req, res) => {
	try {
		const transaction = await createSplitTransaction(req.body)
		res.json(transaction)
	} catch (error) {
		res.json({ error: true, message: error.message })
	}
})

module.exports = router
