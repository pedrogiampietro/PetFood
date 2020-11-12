const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose.set('debug', true)

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
