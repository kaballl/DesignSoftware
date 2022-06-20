const express =require('express')
const nodemailer = require('nodemailer')
const router=express.Router()
const forgetpasswordController=require('../app/controllers/forgetpasswordControllers')



router.get('/',forgetpasswordController.index)
router.post('/forget',forgetpasswordController.forget)






module.exports=router;