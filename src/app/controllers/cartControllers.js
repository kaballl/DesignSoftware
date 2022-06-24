
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
                const Active=1
                const info="Thông tin cá nhân"
                const logout="Đăng xuất"
                const change="Đổi mật khẩu"
                res.render('cart',{data,path,info,logout,change,Active})
            }
            else{
                const login="Đăng nhập"
                res.render('cart',{data,path,login})
            }
            
           
            

        }




        
    }
    
}
    
   
    

module.exports= new CartController;