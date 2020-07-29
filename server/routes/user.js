const router = require('express').Router()
const user = require('../controllers/user')

router
    .post('/login',user.login)
    .post('/register',user.register)

module.exports = router