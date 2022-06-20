const express =require('express')
const router=express.Router()
const singleproductController=require('../app/controllers/singleproductControllers')



router.get('/:slug',singleproductController.index)
router.post('/:slug/store',singleproductController.store)
router.get('/:slug/add',singleproductController.add)




module.exports=router;