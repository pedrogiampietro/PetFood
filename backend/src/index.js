const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//database

require('./mongoose')

const app = express()

const port = 3333

app.set('port', process.env.PORT || port)
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/', require('./routes/main.routes'))

app.listen(app.get('port'), () => {
	console.log(`listening on port ${process.env.PORT || port}! 🍓`)
})
