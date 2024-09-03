const express = require('express')
const { authMiddleware } = require('../Middleware')
const { Account } = require('../db')

const router = express.Router()


router.get('/balance', authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        UserId: req.UserId
    })

    res.json({
        balance: account.balance
    })
})


router.post('/transfer', authMiddleware, async (req, res) => {
    
})



module.exports = router
