
const Product=require('../models/Product')
const{mongooseToObject, allProcedure, notExistProcedure}=require('../../util/mongoose')




class HomeController{
    
    

 
    index(req,res,next)
        {
          Product.find({trend:true})
          .skip()
          .limit(6)
          .lean()
          .then(products=>{
            
                  if(req.session.customer)
                  {
                    const Active=1
                    const info="Thông tin cá nhân"
                    const logout="Đăng xuất"
                    const change="Đổi mật khẩu"
                      res.render('home',{products,info,logout,change,Active})
                  }
                  else{
                    

                    const login="Đăng nhập"
                    res.render('home',{products,login})
                  }
                  
                })

              
            
            
       

       
          .catch(next)
       }
      }
      
              
            
            
          
           
  
    
   
    

module.exports= new HomeController;