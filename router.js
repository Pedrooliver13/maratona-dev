const express = require('express')
const routes = express.Router()

routes.get('/' , (req , res)=>{
    return res.render('donation/index')
})

module.exports = routes