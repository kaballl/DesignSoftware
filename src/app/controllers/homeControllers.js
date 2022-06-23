
const Product=require('../models/Product')
const{mongooseToObject, allProcedure, notExistProcedure}=require('../../util/mongoose')




class HomeController{
    
    

 
    index(req,res,next)
        {
          Product.find({_trend:true})
          .skip()
          .limit(6)
          .lean()
          .then(products=>{
            
                  if(req.session.customer)
                  {
                    const Active=TRUE
                      const info="Your Information"
                      const logout="Logout"
                      const change="Change Password"
                      res.render('home',{products,info,logout,change,Active})
                  }
                  else{

                    const login="Login"
                    res.render('home',{products,login})
                  }
                  
                })

              
            
            
       

       
          .catch(next)
       }
      }
      
              
            
            
          
           
  
    
   
    

module.exports= new HomeController;