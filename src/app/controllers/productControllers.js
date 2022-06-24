const { error } = require('npmlog')
const { notExistProcedure } = require('../../util/mongoose')
const Product=require('../models/Product')
var PAGE_SIZE=6


class ProductController{
    
    //[GET]/product


    index(req, res,next){


        
        var page =req.query.page
       
        var _nsx=req.query.nsx
        if(page&&_nsx=='all'){
            page=parseInt(page)
            if(page<1)
                page=1
            
            var skipAmount=(page-1)*PAGE_SIZE
            
            
            Product.find({})
            .skip(skipAmount)
            .limit(PAGE_SIZE)
            .lean()
            .then(products=>{
                
                Product.countDocuments({})
                .then((total)=>{
                    Product.find({})
                    .skip()
                    .limit()
                    .lean()
                    .then(p=>{

                        var procedures=[]
                        procedures.push("all")
                        for(let i=0;i<p.length;i++)
                        {
                            if(notExistProcedure(p[i]._procedure,procedures))
                            {
                                procedures.push(p[i]._procedure)
                            }

                        }

                    
                        var tongsoPage=Math.ceil(total/PAGE_SIZE)
                        var page_items=[]
                   
                        for(let i=1;i<=tongsoPage;i++)
                        {
                            const item={
                                value:i,
                                isActive:i===page,
                            
                                n:_nsx

                            }
                            page_items.push(item)
                        }
                        if(req.session.customer)
                        {
                           const Active=1
                            const info="Thông tin cá nhân"
                            const logout="Đăng xuất"
                            const change="Đổi mật khẩu"
                            res.render('category',{info,logout,products,tongsoPage,page_items,_nsx,change,Active,procedures})
                        }
                        else
                        {
                            const login="Đăng nhập"
                            res.render('category',{products,tongsoPage,page_items,_nsx,login,procedures})
                        }
            
                    
                    
                   
                    
                    })
                })
             })
            .catch(next)
            

        }
        
        else if(page&&_nsx!='all'){
            page=parseInt(page)
            if(page<1)
                page=1
            
            var skipAmount=(page-1)*PAGE_SIZE
            
            
            Product.find({_procedure:_nsx})
            .skip(skipAmount)
            .limit(PAGE_SIZE)
            .lean()
            .then(products=>{
                
                Product.countDocuments({_procedure:_nsx}).then((total)=>{
                    Product.find({})
                    .skip()
                    .limit()
                    .lean()
                    .then(p=>{

                        var procedures=[]
                        procedures.push("all")
                        for(let i=0;i<p.length;i++)
                        {
                            if(notExistProcedure(p[i]._procedure,procedures))
                            {
                                procedures.push(p[i]._procedure)
                            }

                        }
                    var tongsoPage=Math.ceil(total/PAGE_SIZE)
                    var page_items=[]
                    for(let i=1;i<=tongsoPage;i++)
                    {
                        const item={
                            value:i,
                            isActive:i===page,
                            
                            n:_nsx
                        }
                        page_items.push(item)
                    } 
                    if(req.session.customer)
                    {
                        const Active=1
                        const info="Thông tin cá nhân"
                        const logout="Đăng xuất"
                        const change="Đổi mật khẩu"
                        res.render('category',{info,logout,products,tongsoPage,page_items,_nsx,change,Active,procedures})
                    }
                    else
                    {
                        const login="Đăng nhập"
                        res.render('category',{products,tongsoPage,page_items,_nsx,login,procedures})
                    }
                    
                   
                    
                })
            })
        })
            .catch(next)
            

        }
        
        else{
            res.redirect('/product?page=1&nsx=all')
        }



        

    }
    //[GET]/product/:slug
   
    
}
module.exports= new ProductController;