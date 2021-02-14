const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require('express-validator')
const authMiddleware = require('./middlewares/authMiddleware')
const roleMiddleware = require('./middlewares/roleMiddleware')

router.post('/registration', [
    check('email', 'Поле E-mail не может быть пустым!').notEmpty(),
    check('username', 'Имя пользователя не может быть пустым!').notEmpty(),
    check('password', 'Пароль должен быть не меньше 4-х и не больше 12-и символов!').isLength({min: 4, max: 12}),
    check('password_confirmation', 'Пароли не совпадают').custom((value, {req}) => (value === req.body.password)),
], controller.registration)

router.post('/login', controller.login)
router.get('/users', roleMiddleware(['ADMIN', 'USER']), controller.getUsers)

module.exports = router