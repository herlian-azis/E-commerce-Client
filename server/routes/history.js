const router = require('express').Router()
const history = require('../controllers/history')

router
.get('/',history.listHistory)


module.exports = router