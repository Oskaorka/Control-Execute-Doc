const express = require('express')
const Executor = require('../modules/Executor')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res ) => {
    try {
        const list = await  Executor.find()
        res.status(200).send( list )
    }catch (e) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже'
        })
    }
})
module.exports = router