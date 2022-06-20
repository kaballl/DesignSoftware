
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')
const Order=require('../models/Order')
const Orderdetail=require('../models/Orderdetail')




class ConfirmationController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            if(req.session.customer)
            {
                var result=[]
                Order.find({_iduser:req.session.customer._id})
                .limit()
                .skip()
                .lean()
                .then(data=>{
                    for(let i=0;i<data.length;i++)
                    {
                        Orderdetail.find({_idorder:data[i]._id})
                        .limit()
                        .skip()
                        .lean()
                        .then(datas=>{
                            const item={
                                order:data[i],
                                datas
                            }
                            result.push(item)
                            if(i==data.length-1)
                            {
                                const info="Your Information"
                                const logout="Logout"
                                const change="Change Password"
                                res.render('confirmation',{info,logout,change,result})
                                
                            }

                        })

                    }
                })
                
                
            }
            else
            {   
                res.redirect('/login')
            }
        }



    }

}
    
   
    

module.exports= new ConfirmationController;