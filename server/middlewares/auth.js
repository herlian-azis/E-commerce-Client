const { decode } = require('../helpers/jwt')
const { Product, Cart, models } = require('../models')


module.exports = class Auth {
    static authentication(req, res, next) {
        try {
            if (req.headers.access_token) {
                req.myUser = decode(req.headers.access_token)
                next()
            } else {
                throw ({ status: 400, message: 'invalid token' })
            }
        } catch (error) {
            next(error)
        }
    }

    static authorization(req, res, next) {
        // console.log(req.myUser);
        try {
            if (req.myUser.role === 'admin') {
                next()
            } else {
                throw ({ status: 403, message: 'only the admin can do it' })
            }
        } catch (error) {
            next(error)
        }
    }

    static async cartAuthorization(req, res, next) {
        try {
            const cart = await Cart.findOne({ where: { id: req.params.id }, returning: true })
            if (!cart) {
                throw ({ status: 404, message: 'Cart not found' })
            }
             else if (cart.UserId === req.myUser.id) {
                next()
            }
            else {
                throw ({ status: 403, message: 'not access' })
            }
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}