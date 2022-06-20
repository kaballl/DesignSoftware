const express =require('express')
const nodemailer = require('nodemailer')
const router=express.Router()
const registrationController=require('../app/controllers/registrationControllers')



router.get('/',registrationController.index)
router.post('/storeadd',registrationController.storeadd)






module.exports=router;