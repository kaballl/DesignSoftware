
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
        req.session.customer._name=req.body._name
        req.session.customer._email=req.body._email
        req.session.customer._address=req.body._address
        req.session.customer._avatar=req.body._avatar
            Customer.updateOne({ _id: req.session.customer._id }, req.body)
            .then(() => res.redirect('info'))
            .catch(next);
    }


}
    
   
    

module.exports= new InfoController;