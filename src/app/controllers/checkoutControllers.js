
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')
const Order=require('../models/Order')
const Orderdetail=require('../models/Orderdetail')




class CheckOutController{
    
    

    index(req,res,next){
        {

            if(req.session.customer)
            {
                const info="Your Information"
                const logout="Logout"
                const change="Change Password"
                var data=req.session.data
                var result=[]
                var sum=0
                
                for(let i=0;i<data.length;i++)
                {
                    const number1=1
                    const item={
                        name:data[i]._nameproduct,
                        number:number1,
                        total:number1*parseInt(data[i]._price)
                        
                        


                    }
                    sum=sum+item.total
                    result.push(item)
                }
                req.session.sum=sum
                res.render('checkout',{info,logout,change,result,sum})
            }
            else{
                res.redirect('/login')
            }
            
        }



    }
    store(req,res,next)
    {
        if(req.body.address==""||req.body.number=="")
        {
            var message="You must complete the delivery information(Address,Number)"
            const info="Your information"
            const logout="Logout"
            const change="Change Password"
            var data=req.session.data
                var result=[]
                var sum=0
                
                for(let i=0;i<data.length;i++)
                {
                    const number1=1
                    const item={
                        name:data[i]._nameproduct,
                        number:number1,
                        total:number1*parseInt(data[i]._price)
                        
                        


                    }
                    sum=sum+item.total
                    result.push(item)
                }
                req.session.sum=sum
            
            res.render('checkout',{info,logout,change,message,result,sum})
        }
        else
        {
            var today=new Date()
            req.session.address=req.body.address
            req.session.number=req.body.number
            req.session.node=req.body.message
            const orderData=new Order()
            orderData._iduser=req.session.customer._id
            orderData._status="not"
            orderData._address=req.body.address
            orderData._phonenumber=req.body.number
            orderData._note=req.body.message
            orderData._total=req.session.sum
            orderData._book=today
            orderData._delivery=today
    
            orderData.save()
            .then(()=>{
                var message="Thank you. Your order has been received."
                const info="Your information"
                const logout="Logout"
                const change="Change Password"
                
                data=[]
                data=req.session.data
                for(let i=0;i<data.length;i++)
                {
                    var orderDetail=new Orderdetail()
                    orderDetail._idorder=orderData._id
                    orderDetail._idproduct=data[i]._id
                    orderDetail._nameproduct=data[i]._nameproduct
                    orderDetail._amount=1
                    orderDetail._total=orderDetail._amount*parseInt(data[i]._price)
                    orderDetail.save()
                }
                req.session.data=[]
                res.render('checkout',{info,logout,change,message})
            })
        }

        

    }

    }
    
   
    

module.exports= new CheckOutController;