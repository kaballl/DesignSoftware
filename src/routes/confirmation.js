const express =require('express')
const router=express.Router()
const confirmationController=require('../app/controllers/confirmationControllers')



router.get('/',confirmationController.index)




module.exports=router;