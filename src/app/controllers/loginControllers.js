
const Product=require('../models/Product')

const Customer=require('../models/Customer')
const{mongooseToObject}=require('../../util/mongoose')
const { redirect } = require('express/lib/response')




class LoginController{
    
    

  
    index(req,res,next){
       
        if(req.session.customer)
        {
            res.redirect('/info')
        }
        else
        {
            const login="Đăng nhập"
            res.render('login',{login})
        }
            
                
            
        
    }
    check(req,res,next)
    {
        console.log(req.body);
        Customer.find({_username:req.body.username,_password:req.body.password})
        .lean()
        .then((customer)=>{
            var mess;
            console.log(customer);
            if(customer.length==0)
            {
                console.log(1);
                mess="Sai tên đăng nhập hoặc mật khẩu";
                const login="Đăng nhập"
                res.render('login',{mess,login});
            }
            else{ if(customer[0]._lock==true)
            {
                const login="Đăng nhập"
                mess="Tài khoản này đã bị khóa bởi quản trị viên";
                res.render('login',{mess,login});     
            }
            else
            {
                req.session.customer=customer[0];
                res.redirect('/home');
            }}
        })
    }


}
    
   
    

module.exports= new LoginController;