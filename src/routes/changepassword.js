const express =require('express')
const router=express.Router()
const changepasswordController=require('../app/controllers/changepasswordControllers')



router.get('/',changepasswordController.index)
router.post('/',changepasswordController.check)



module.exports=router;