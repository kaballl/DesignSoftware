
const Product=require('../models/Product')
const Comment=require('../models/Comment')
const{mongooseToObject, relatedProduct}=require('../../util/mongoose')
var PAGE_SIZE=2



class SingleProductController{
    
    

  
    index(req,res,next)
        {
            
            Product.findOne({_slug:req.params.slug})
            
            
            
            .then((data) =>{
                
                
            
            
                             Comment.find({_idproduct:data._id})
                            .skip()
                            .limit()
                            .lean()
                            .then(comments=>{
                                
                                    if(req.session.customer)
                                    {
                                        const info="Your Information"
                                        const logout="Logout"
                                        const change="Change Password"
                                        res.render('singleproduct/singleproduct',{change,info,logout,comments,data:mongooseToObject (data)})
                                    }
                                    else
                                    {
                                        const login="Login"
                                        res.render('singleproduct/singleproduct',{login,comments,data:mongooseToObject (data)})
                                    }
                                    
                                   
                   
                    
                                })
                          
                            
                       
                            
                            
                        
                
                
                    
                   
                
                
                
                    
           
                

            })
            .catch(next)
           


            

        }
        store(req,res,next)
        {
            const formData=req.body
            formData._idproduct=req.params.slug
            const comment=new Comment(formData)
            comment.save()
            .then(()=>res.redirect('/singleproduct/'+req.params.slug))
            .catch(error=>{

            })
            



        }
        add(req,res,next)
        {
            Product.findOne({_slug:req.params.slug})
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
       



        

    }


    
   
    

module.exports= new SingleProductController;
