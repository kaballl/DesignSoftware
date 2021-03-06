
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
                Order.find({id_customer:req.session.customer._id})
                .limit()
                .skip()
                .lean()
                .then(data=>{
                    for(let i=0;i<data.length;i++)
                    {
                        Orderdetail.find({idorder:data[i]._id})
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
                                const Active=1
                                const info="Thông tin cá nhân"
                                const logout="Đăng xuất"
                                const change="Đổi mật khẩu"
                                res.render('confirmation',{info,logout,change,result,Active})
                                
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