
const Customer=require('../models/Customer')
const{mongooseToObject}=require('../../util/mongoose')




class ChangePassWordController{
    
    

  
    index(req,res,next){
        if(req.session.customer)
        {
            if(req.session.customer)
            {
                const Active=1
                const info="Thông tin cá nhân"
                const logout="Đăng xuất"
                const change="Đổi mật khẩu"
                res.render('changepassword',{customer:req.session.customer,info,logout,change,Active})
            }
            
           
            
        }
        else
        {
            res.redirect('login');
        }
    }
    check(req,res,next)
    {
        if(req.body.password!=req.session.customer._password){
            const Active=1
            const info="Thông tin cá nhân"
            const logout="Đăng xuất"
            const change="Đổi mật khẩu"
            var message="Mật khẩu hiện tại không chính xác"
            res.render('changepassword',{customer:req.session.customer,info,logout,message,change,Active})

        }
        else if(req.body.newpassword!=req.body.repeatpassword)

        {
            const Active=1
            const info="Thông tin cá nhân"
            const logout="Đăng xuất"
            const change="Đổi mật khẩu"
             var message="Mật khẩu mới phải trùng với mật khẩu xác nhận"
            res.render('changepassword',{customer:req.session.customer,info,logout,message,change,Active})

        }
        else
        {
            req.session.customer._password=req.body.newpassword
            var message="Đổi mật khẩu thành công "
            const Active=1
            const info="Thông tin cá nhân"
            const logout="Đăng xuất"
            const change="Đổi mật khẩu"
             Customer.findByIdAndUpdate( req.session.customer._id ,{_password:req.session.customer._password})
            .then(() => res.render('changepassword',{customer:req.session.customer,info,logout,message,change,Active}))
            .catch(next);
        }
        
    }


}
    
   
    

module.exports= new ChangePassWordController;
