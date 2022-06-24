
const Customer=require('../models/Customer')
const nodemailer = require('nodemailer')
const{mongooseToObject, check, forgetPasswordCheck, getObjectForgetPassword}=require('../../util/mongoose')





class ForgetPasswordController{
    
    

  
    index(req,res,next){
        
        if(req.session.customer)
        {
            const Active=1
            const info="Your information"
            const logout="Logout"
            const change="Change Password"
            res.render('forgetpassword',{info,logout,change,Active})
        }
        else
        {
            const login="Login"
            res.render('forgetpassword',{login})
        }
        



    }
    forget(req,res,next)
    {
        Customer.find({})
        .limit()
        .skip()
        .lean()
        .then(datas=>{
            if(forgetPasswordCheck(datas,req.body._username))
            {
                var Object=getObjectForgetPassword(datas,req.body._username);
                console.log(Object._email)
                var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                var string_length = 6;
                var randomstring = '';
                var message;
                for (var i=0; i<string_length; i++) {
                    var rnum = Math.floor(Math.random() * chars.length);
                    randomstring += chars.substring(rnum,rnum+1);
                }
                let transporter=nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        user:'leminhduc050501@gmail.com',
                        pass:'cyggtiusfzavsmxa'
                    },
                    port: 465,
                    host: 'smtp.gmail.com'
                })
        
                let mailOptions={
                   from:'leminhduc050501@gmail.com',
                   to:Object._email,
                    subject:'DesignSoftware',
                    text:'Your password is '+ randomstring
                }
                transporter.sendMail(mailOptions,function(err,data){
                    if(err){
                        console.log('error occurs:',err)
                        message="Email is invalid"
                        if(req.session.customer)
                        {
                            const Active=1
                            const info="Your information"
                            const logout="Logout"
                            const change="Change Password"
                            res.render('forgetpassword',{info,logout,change,message,Active})
                        }
                        else
                        {
                            const login="Login"
                            res.render('forgetpassword',{login,message})
                        }
                        
                        
        
                    }
                    else{
                        
                        
                        Customer.findByIdAndUpdate(Object._id,{_password:randomstring})
                        .then(()=>{
                            message="We have sent you a message in your email "+Object._email+" with a random password.Please Sign in your email and take it" 
                            if(req.session.customer)
                            {
                                const Active=1
                                const info="Your information"
                                const logout="Logout"
                                const change="Change Password"
                                res.render('forgetpassword',{info,logout,change,message,Active})
                            }
                            else
                            {
                                const login="Login"
                                res.render('forgetpassword',{login,message})
                            }
                            
                        })
                        .catch(error=>{

                         })
                        
                    }
                })
               

            }
            else{
                message="The Username is invalid"
                if(req.session.customer)
                {
                    const Active=1
                    const info="Your information"
                    const logout="Logout"
                    const change="Change Password"
                    res.render('forgetpassword',{info,logout,change,message,Active})
                }
                else
                {
                    const login="Login"
                    res.render('forgetpassword',{login,message})
                }
                
            }
           
            

        })
        

    }

}
    
   
    

module.exports= new ForgetPasswordController;