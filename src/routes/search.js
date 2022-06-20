const express =require('express')
const router=express.Router()
const searchController=require('../app/controllers/searchControllers')



router.get('/',searchController.index)
router.get('/',searchController.search)





module.exports=router;