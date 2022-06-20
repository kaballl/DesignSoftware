const express =require('express')
const router=express.Router()
const cartController=require('../app/controllers/cartControllers')



router.get('/',cartController.index)






module.exports=router;