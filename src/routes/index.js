const productRouter=require('./product')
const singleproductRouter=require('./singleproduct')

const cartRouter=require('./cart')
const checkoutRouter=require('./checkout')
const confirmationRouter=require('./confirmation')

const homeRouter=require('./home')
const loginRouter=require('./login')
const searchRouter=require('./search')
const registrationRouter=require('./registration')
const infoRouter=require('./info')
const logoutRouter=require('./logout')
const forgetpasswordRouter=require('./forgetpassword')
const changepasswordRouter=require('./changepassword')

function route(app){
    app.use('/product',productRouter )
    app.use('/singleproduct',singleproductRouter)
    app.use('/info',infoRouter )
    app.use('/logout',logoutRouter)
    app.use('/forgetpassword',forgetpasswordRouter)
    app.use('/changepassword',changepasswordRouter)

    app.use('/cart',cartRouter)
    app.use('/checkout',checkoutRouter)
    app.use('/history',confirmationRouter)

    app.use('/home',homeRouter)
    app.use('/login',loginRouter)
    app.use('/search',searchRouter)
    app.use('/registration',registrationRouter)
    
      
}

module.exports=route