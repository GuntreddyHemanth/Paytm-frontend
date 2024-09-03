const { JWt_SECRET } = require("./config");
const jwt = require("jsonwebtoken")


const authMiddleware = (req, res, next) =>{
    const authHeader = req.headers.authorization;

    if (!authHeader || authHeader.startWith("Bearer ")){
        return res.status(403).json({})
    }

    const token = authHeader.split(' ')[1]

    try{
        const decoded = jwt.verify(token, JWt_SECRET)

        if (decoded.UserId){
            req.UserId = decoded.UserId 
            next()
        } else {
            return res.status(403).json({})
        }
    } catch(e){
        return res.status(403).json({
            error: e 
        })
    }

}

module.exports = {
    authMiddleware
}