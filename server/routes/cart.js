const router = require('express').Router()

const cart = require('../controllers/cart')
const {authentication,cartAuthorization} = require('../middlewares/auth')

router.use(authentication)
router.get('/',cart.listCart)
router.post('/',cart.postCart)

// router.use(cartAuthorization)
console.log('masukkkk');
router.delete('/:id',cartAuthorization,cart.delete)
router.patch('/',cartAuthorization,cart.updated)
router.get('/payments',cart.payment)



module.exports = router