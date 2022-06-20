
const Customer=require('../models/Customer')
const{mongooseToObject}=require('../../util/mongoose')




class ChangePassWordController{
    
    

  
    index(req,res,next){
        if(req.session.customer)
        {
            if(req.session.customer)
            {
                const info="Your Information"
                const logout="Logout"
                const change="Change Password"
                res.render('changepassword',{customer:req.session.customer,info,logout,change})
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
            const info="Your Information"
            const logout="Logout"
            const change="Change Password"
            var message="The current password is incorrect"
            res.render('changepassword',{customer:req.session.customer,info,logout,message,change})

        }
        else if(req.body.newpassword!=req.body.repeatpassword)
        {
            const info="Your Information"
            const logout="Logout"
            const change="Change Password"
             var message="The repeat password is not the same as the new password"
            res.render('changepassword',{customer:req.session.customer,info,logout,message,change})

        }
        else
        {
            req.session.customer._password=req.body.newpassword
            var message="Your password has been changed successfully "
            const info="Your Information"
            const logout="Logout"
            const change="Change Password"
             Customer.findByIdAndUpdate( req.session.customer._id ,{_password:req.session.customer._password})
            .then(() => res.render('changepassword',{customer:req.session.customer,info,logout,message,change}))
            .catch(next);
        }
        
    }


}
    
   
    

module.exports= new ChangePassWordController;
