
const User = require('./models/User');
const Role = require('./models/Role');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secret} = require('./config')
const { validationResult } = require('express-validator');

const generateAccessToken = (id, roles) => {
    const payload = {
        id, roles
    }

    return jwt.sign(payload, secret, { expiresIn: "24h" })
}

class authController {

    async registration(req, res) {
        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json(
                    {
                        success: false,
                        message: "Ошибка при регистрации!",
                        errors: [...errors.errors]
                    }
                )
            }

            const { username, email, password } = req.body
            const candidate = await User.findOne({ username })
            if (candidate) {
                return res.status(400).json(
                    {
                        success: false,
                        message: "Пользователь с таким именем уже существует"
                    }
                );
            }

            const hashPassword = await bcrypt.hash(password, 7);
            const userRole = await Role.findOne({ value: "USER" })
            const user = new User({ username, password: hashPassword, roles: [userRole.value] })
            
            await user.save()

            return res.json(
                {
                    success: true,
                    message: "Пользователь успешно зарегестрирован"
                }
            );
        } catch (e) {
            console.log(e);
            res.status(400).json({ success: false, message: "Registration error" })
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body

            const user = await User.findOne({ username })
            if (!user) {
                return res.status(400).json(
                    {
                        success: false,
                        message: `Пользователь ${username} не найден!`
                    }
                )
            }

            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json(
                    {
                        success: false,
                        message: 'Введен неверный пароль!'
                    }
                )
            }

            const token = generateAccessToken(user._id, user.roles)
            
            return res.status(200).json({token})

        } catch (e) {
            console.log(e);
            res.status(400).json({ success: false, message: "Login error" })
        }
    }

    async getUsers(req, res) {
        try {
            // const userRole = new Role()
            // const adminRole = new Role({value: 'ADMIN'})
            // await userRole.save()
            // await adminRole.save()

            const users = await User.find()

            res.json(users)
        } catch (e) {

        }
    }
}

module.exports = new authController()