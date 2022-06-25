
const Customer=require('../models/Customer')
const{mongooseToObject}=require('../../util/mongoose')




class InfoController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        if(req.session.customer)
        {
            if(req.session.customer)
            {
                const Active=1
                const info="Thông tin cá nhân"
                const logout="Đăng xuất"
                const change="Đổi mật khẩu"
                res.render('info',{customer:req.session.customer,info,logout,change,Active})
            }
            
           
            
        }
        else
        {
            res.redirect('login');
        }
    }
    check(req,res,next)
    {
        req.session.customer.name=req.body.name
        req.session.customer.email=req.body.email
        req.session.customer.address=req.body.address
        req.session.customer.avatar=req.body.avatar
            Customer.updateOne({ _id: req.session.customer._id }, req.body)
            .then(() => res.redirect('info'))
            .catch(next);
    }


}
    
   
    

module.exports= new InfoController;