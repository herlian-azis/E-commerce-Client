const router = require('express').Router()
const product = require('../controllers/product')
const {authorization} = require('../middlewares/auth')

router
    .get('/',product.listProduct)
    .post('/',product.addItem)
    .get('/:id',authorization,product.getProductById)
    .put('/:id',authorization,product.updateProduct)
    .delete('/:id',authorization,product.deleteProduct)

module.exports = router
