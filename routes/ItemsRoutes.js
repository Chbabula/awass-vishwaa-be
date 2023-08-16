const express = require('express')
const router = express.Router()
const {createItem}=require('../controller/itemsController')

router.post('/', createItem)

module.exports = router