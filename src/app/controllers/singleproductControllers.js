
const Product=require('../models/Product')
const Comment=require('../models/Comment')
const{mongooseToObject, relatedProduct}=require('../../util/mongoose')
const { TRUE } = require('node-sass')
var PAGE_SIZE=2



class SingleProductController{
    
    

  
    index(req,res,next)
        {
            
            Product.findOne({slug:req.params.slug})
            
            
            
            .then((data) =>{
                
                
            
            
                             Comment.find({idproduct:data.id})
                            .skip()
                            .limit()
                            .lean()
                            .then(comments=>{
                                
                                    if(req.session.customer)
                                    {

                                        const info="Thông tin cá nhân"
                                        const logout="Đăng xuất"
                                        const change="Đổi mật khẩu"
                                        const Active=1
                                        res.render('singleproduct/singleproduct',{change,Active,info,logout,comments,data:mongooseToObject (data)})
                                    }
                                    else
                                    {
                                        const login="Đăng nhập"
                                        res.render('singleproduct/singleproduct',{login,comments,data:mongooseToObject (data)})
                                    }
                                    
                                   
                   
                    
                                })
                          
                            
                       
                            
                            
                        
                
                
                    
                   
                
                
                
                    
           
                

            })
            .catch(next)
           


            

        }
        store(req,res,next)
        {
            
            const comment=new Comment()
            comment.id_product=req.params.slug
            comment.nameuser=req.body.nameuser
            comment.lock=false
            comment.message=req.body.message
            comment.save()
            .then(()=>res.redirect('/singleproduct/'+req.params.slug))
            .catch(error=>{

            })
            



        }
        add(req,res,next)
        {
            if(req.session.customer)
            {

                
                Product.findOne({slug:req.params.slug})
                .then(data=>{
                    data=mongooseToObject(data)
                    if(!req.session.data)
                    {
                        var temp=[];
                        temp.push(data)
                         req.session.data=temp
                     }
                    else{
                        var temp=[]
                        temp=req.session.data
                        temp.push(data)
                         req.session.data=temp
                    }
               

                
                    var message="Thêm vào giỏ hàng thành công"
                     res.redirect('/cart')

                 })
            }
            else
            {
                res.redirect('/login')


            }
    }
       



        

    }


    
   
    

module.exports= new SingleProductController;
