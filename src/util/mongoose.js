module.exports={
    mutipleMongooseToObject : function(mongooses){
        return mongooses.map((mongoose)=>mongoose.toObject())
    },
    mongooseToObject : function(mongoose){
        return mongoose ? mongoose.toObject():mongoose

    },
    relatedProduct:function(products,name){
        var result=[]
        for(let i=0;i<products.length;i++)
        {
            if(products[i]._nameproduct != name)
            {
                result.push(products[i])
            }
        }
        return result

    },
    searchInMongoose:function(products,nameproduct,idcate,procedure,price)
    {
        var results1=[]
        var results2=[]
        var results3=[]
        var results=[]
        for(let i=0;i<products.length;i++)
        {
            if(products[i]._nameproduct == nameproduct||nameproduct=='')
            {
                results1.push(products[i])
            }
        }
        for(let i=0;i<results1.length;i++)
        {
            if(results1[i]._idcate == idcate||idcate=='')
            {
                results2.push(results1[i])
            }
        }
        for(let i=0;i<results2.length;i++)
        {
            if(results2[i]._procedure == procedure||procedure=='')
            {
                results3.push(results2[i])
            }
        }
        for(let i=0;i<results3.length;i++)
        {
            if(results3[i]._price== price||price=='')
            {
                results.push(results3[i])
            }
        }
        
        
        return results.map((result)=>result.toObject())
    },
    pagination:function(products,limit,skip)
    {
        results=[]
        temp=products.length-skip
        temp2=products.length-limit-skip
        if(temp<0||temp==0)
        {

        }
        else
        {
            if(temp2>0||temp2==0){
                for(let i=skip;i<skip+limit;i++)
                    {
                    
            
                        results.push(products[i])
            
                    }
                    

            }
            else{
                for(let i=skip;i<products.length;i++)
                {
                
        
                    results.push(products[i])
        
                }
            }
        }

        
        return results
    },
    check:function(datas,username,email)
    {
        for(let i=0;i<datas.length;i++)
        {
        

            if(datas[i]._username==username||datas[i]._email==email)
            {
                return false
            }

        }
        return true

    },
    notExistProcedure:function(procedure,result)
    {
        for(let i=0;i<result.length;i++)
        {
            if(procedure==result[i])
            {
                return false
            }
        }
        return true

    },
    forgetPasswordCheck:function(datas,username)
    {
        for(let i=0;i<datas.length;i++)
        {
        

            if(datas[i]._username==username)
            {
                return true
            }

        }
        return false

    },
    getObjectForgetPassword:function(datas,username)

    {
        for(let i=0;i<datas.length;i++)
        {
            if(datas[i]._username==username)
            {
                return datas[i]
            }
        }
    }
    
    
}