const jwt = require("jsonwebtoken")

const authN = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(404).json({ message: "no token provided" })
    }
    const token = authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token, 'my_secret_rajkishordas09')
        req.username = decoded.username;
        req.role = decoded.role;
        next()
    }
    catch (error) {
        return res.status(404).json({ message: "invalid token" })
    }

}
module.exports = authN;