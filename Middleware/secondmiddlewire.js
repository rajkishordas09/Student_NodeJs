const secondMiddleware= (req,res,next)=>{
    console.log("my second middleware")
    next()
}
module.exports=secondMiddleware;