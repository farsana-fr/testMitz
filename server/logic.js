const db=require("./db")

getProductTab=()=>{
    return db.Product.find().then(data=>{
        console.log("data",data);
        if(data){
            return {
                status:true,
                statusCode:200,
                message:data
            }
        }
    })
}
getOrderTab=()=>{
    return db.Order.find().then(data=>{
        console.log("data",data);
        if(data){
            return {
                status:true,
                statusCode:200,
                message:data
            }
        }
    })
}
getCustomerPrefTab=()=>{
    
    return db.CustomerPreference.find().then(data=>{
        console.log("data",data);
        if(data){
            return {
                status:true,
                statusCode:200,
                message:data
            }
        }
    })
}

getRes=()=>{
    return db.Product.aggregate([
        {"$group" : { "_id": "$product_id", "count": { "$sum": 1 } } },
        {"$match": {"_id" :{ "$ne" : null } , "count" : {"$gt": 1} } }, 
        {"$project": {"name" : "$_id", "_id" : 0} }
    ])
}

module.exports={
    getProductTab,
    getOrderTab,
    getCustomerPrefTab,
    getRes
}