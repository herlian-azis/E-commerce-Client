const router = require('express').Router()
const userRot = require('./user')
const productRot = require('./product')
const cartRot = require('./cart')
const historyRot = require('./history')

const {authentication} = require('../middlewares/auth')


router
    .use('/', userRot)
    .use('/products', productRot)
    .use(authentication)
    .use('/carts',cartRot)
    .use('/histories',historyRot)

module.exports = router