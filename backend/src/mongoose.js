const mongoose = require('mongoose')

mongoose
	.connect(
		'mongodb+srv://root:899681ph@cluster0.03uyz.gcp.mongodb.net/petfood?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		console.log('Mongoose is up!')
	})
	.catch((err) => {
		console.log(err)
	})
