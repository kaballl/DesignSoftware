
const Product=require('../models/Product')
const{mongooseToObject, mutipleMongooseToObject, searchInMongoose,pagination}=require('../../util/mongoose')
var PAGE_SIZE=3



class SearchController{
    
    

  
    index(req,res,next){
        {
            var page =req.query.page
           
            page=parseInt(page)
            if(page<1)
                page=1
            var skipAmount=(page-1)*PAGE_SIZE
            var nameproduct=req.query.name;
            var idcate=req.query.cate;
            var procedure=req.query.procedure;
            var price=req.query.price;
            Product.find({})
            .limit()
            .skip()
            .then(products=>{
                products=searchInMongoose(products,nameproduct,idcate,procedure,price)
                
                var tongsoPage=Math.ceil(products.length/PAGE_SIZE)
                var page_items=[]
                products=pagination(products,PAGE_SIZE,skipAmount)
                for(let i=1;i<=tongsoPage;i++)
                {
                    const item={
                        value:i,
                        isActive:i===page,
                        name:nameproduct,
                        cate:idcate,
                        proce:procedure,
                        pri:price
                        

                    }
                    page_items.push(item)
                } 
                if(req.session.customer)
                {
                    const info="Your Information"
                    const logout="Logout"
                    const change="Change Password"
                    res.render('search',{info,logout,products,tongsoPage,page_items,change})
                }
                else
                {
                    const login="Login"
                    res.render('search',{products,tongsoPage,page_items,login})
                }
                
            })
        }



    }
    search(req,res,next)
    {
        res.redirect('search')

    }

}
    
   
    

module.exports= new SearchController;