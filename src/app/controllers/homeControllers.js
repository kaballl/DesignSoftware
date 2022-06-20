
const Product=require('../models/Product')
const{mongooseToObject, allProcedure, notExistProcedure}=require('../../util/mongoose')




class HomeController{
    
    

 
    index(req,res,next){
        {
          Product.find({})
          .skip()
          .limit()
          .lean()
          .then(products=>{
            var procedure=[]
            var result=[]
            for(let i=0;i<products.length;i++)
            {
              if(notExistProcedure(products[i]._procedure,procedure))
              {
                procedure.push(products[i]._procedure)
              }
            }
            for(let i=0;i<procedure.length;i++)
            {
              Product.find({_procedure:procedure[i],_booth:true})
              .limit(8)
              .lean()
              .then(data=>{
                const item={
                  data,
                  cate:procedure[i]
                  
                  
                }
                result.push(item)
                if(i==procedure.length-1)
                {
                  if(req.session.customer)
                  {
                      const info="Your Information"
                      const logout="Logout"
                      const change="Change Password"
                      res.render('home',{result,info,logout,change})
                  }
                  else{
                    const login="Login"
                    res.render('home',{result,login})
                  }
                  
                }

              })
            }
            
            })
       
          .catch(next)
           
        }



    }

 }
    
   
    

module.exports= new HomeController;