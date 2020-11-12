const Petshop = require('../models/Petshop')
const Product = require('../models/Product')
const petshops = require('./petfood.json')
const createRecipients = require('../services/pagarmeGateway').createRecipients

// database
require('../mongoose')

const addPetshopsAndProducts = async () => {
	try {
		for (let petshop of petshops) {
			const recipient = await createRecipients(petshop.name)

			if (!recipient.error) {
				const newPetshop = await new Petshop({
					...petshop,
					recipient_id: recipient.data.id,
				}).save()

				await Product.insertMany(
					petshop.products.map((p) => ({ ...p, petshop_id: newPetshop._id }))
				)
			} else {
				console.log(recipient.message)
			}
		}

		console.log('Final do Script! 🆗')
	} catch (error) {
		console.log(error.message)
	}
}

addPetshopsAndProducts()
