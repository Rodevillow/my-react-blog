const jwt = require('jsonwebtoken')
const {secret} = require('../config')

module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
    
        try {
            const splitToken = req.headers.authorization.split(' ')
            const tokenType = splitToken[0]
            const token = splitToken[1]
    
            if (tokenType !== 'Bearer') {
                return res.status(403).json(
                    {
                        success: false,
                        message: "Не верный тип токена"
                    }
                )
            }
            
            if (!token) {
                return res.status(403).json(
                    {
                        success: false,
                        message: "Пользователь не авторизован!"
                    }
                )
            }
    
            const {roles: userRoles} = jwt.verify(token, secret)
            let hasRole = false;
            userRoles.forEach(role => {
                if (roles.includes(role)) {
                    hasRole = true
                }
            });
            if (!hasRole) {
                return res.status(403).json(
                    {
                        success: false,
                        message: "У вас нет дооступа!"
                    }
                )
            }
            next()
    
        } catch (e) {
            console.log(e);
            return res.status(403).json(
                {
                    success: false,
                    message: "Пользователь не авторизован!"
                }
            )
        }
    } 
}