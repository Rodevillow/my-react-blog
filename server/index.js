const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const authRouter = require('./authRouter')

const PORT = process.env.PORT = 5000

const app = express()

// * * * * * * * * * * * * * * * * * * * *
// Enable "Access-Control-Allow-Origin"
app.use(cors());
// * * * * * * * * * * * * * * * * * * * *
app.options('*', cors());

app.use(express.json())

app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost/blogy', { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(PORT, () => {
            console.log(`Serve has running... On port = ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start()