
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')
const session = require('express-session')




class CartController{
    
    

  
    index(req,res,next){
        {
            var data=[]
            data=req.session.data
            
            var path
           
            if(req.session.customer)
            {
                path="/checkout"
               
            }
            else{
                path="/login"
            }
            if(req.session.customer)
            {
                const info="Your Information"
                const logout="Logout"
                const change="Change Password"
                res.render('cart',{data,path,info,logout,change})
            }
            else{
                const login="Login"
                res.render('cart',{data,path,login})
            }
            
           
            

        }




        
    }
    
}
    
   
    

module.exports= new CartController;