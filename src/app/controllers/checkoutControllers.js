
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')
const Order=require('../models/Order')
const Orderdetail=require('../models/Orderdetail')




class CheckOutController{
    
    

    index(req,res,next){
        {

            if(req.session.customer)
            {
                const Active=1
                const info="Thông tin cá nhân"
                const logout="Đăng xuất"
                const change="Đổi mật khẩu"
                var data=req.session.data
                var result=[]
                var sum=0
                
                for(let i=0;i<data.length;i++)
                {
                    const number1=1
                    const item={
                        name:data[i].name,
                        number:number1,
                        total:number1*parseInt(data[i].price)
                        
                        


                    }
                    sum=sum+item.total
                    result.push(item)
                }
                req.session.sum=sum
                res.render('checkout',{info,logout,change,result,sum,Active})
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
            var message="Bạn phải điền thông tin giao hàng"
            const Active=1
            const info="Thông tin cá nhân"
            const logout="Đăng xuất"
            const change="Đổi mật khẩu"
            var data=req.session.data
                var result=[]
                var sum=0
                
                for(let i=0;i<data.length;i++)
                {
                    const number1=1
                    const item={
                        name:data[i].name,
                        number:number1,
                        total:number1*parseInt(data[i].price)
                        
                        


                    }
                    sum=sum+item.total
                    result.push(item)
                }
                req.session.sum=sum
            
            res.render('checkout',{info,logout,change,message,result,sum,Active})
        }
        else
        {
            var today=new Date()
            req.session.address=req.body.address
            req.session.number=req.body.number
            req.session.node=req.body.message
            const orderData=new Order()
            orderData.id_customer=req.session.customer._id
            orderData.status="not"
            orderData.address=req.body.address
            orderData.phonenumber=req.body.number
            orderData.note=req.body.message
            orderData.total=req.session.sum
            orderData.book=today
            orderData.delivery=today
    
            orderData.save()
            .then(()=>{
                var message="Cảm ơn bạn.Đơn hàng của bạn đã được xác nhận."
                const Active=1
                const info="Thông tin cá nhân"
                const logout="Đăng xuất"
                const change="Đổi mật khẩu"
                
                data=[]
                data=req.session.data
                for(let i=0;i<data.length;i++)
                {
                    var orderDetail=new Orderdetail()
                    orderDetail.idorder=orderData._id
                    orderDetail.idproduct=data[i]._id
                    orderDetail.nameproduct=data[i].name
                    orderDetail.amount=1
                    orderDetail.total=orderDetail.amount*parseInt(data[i].price)
                    orderDetail.save()
                }
                req.session.data=[]
                res.render('checkout',{info,logout,change,message,Active})
            })
        }

        

    }

    }
    
   
    

module.exports= new CheckOutController;