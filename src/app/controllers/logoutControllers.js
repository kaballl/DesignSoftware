
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class LogOutController{
    
    

 
    index(req,res,next){
        {

            req.session.destroy()

            res.redirect('/login')
            
        }



    }

    }
    
   
    

module.exports= new LogOutController;