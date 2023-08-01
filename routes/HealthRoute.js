const express= require('express');
const router=express.Router()

router.get('/', (req, res)=>{
    res.end('Awass Vishwa backend is healthy')
})



module.exports=router