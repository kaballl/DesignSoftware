const express =require('express')
const router=express.Router()
const infoController=require('../app/controllers/infoControllers')



router.get('/',infoController.index)
router.post('/',infoController.check)



module.exports=router;