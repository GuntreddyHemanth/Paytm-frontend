const express = require('express')
const zod = require("zod")
const router = express.Router()

const signUpSchema = zod.object({
    first_name: zod.string(),
    last_name: zod.string(),
    user_email: zod.string().email,
    password: zod.string()
})

router.get("/signup", (req, res) => {
    const body = req.body
    const {success} = signUpSchema.safeParse(body)

    if (!success){
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    
})

module.exports = router