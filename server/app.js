if (process.env.NODE_ENV == 'development') {
}
require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const errorHandling = require('./middlewares/errorHandling')


app
    .use(cors())
    .use(express.urlencoded({ extended: true }))
    .use(express.json())

    .use(router)
    .use(errorHandling)


if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => console.log(`my PORT : ${PORT}`))
} else {
    module.exports = app;
}