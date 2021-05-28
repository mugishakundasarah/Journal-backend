exports.formatResult=({status=200,message="ok",data})=>{
    return{
    status:status,
    message:message.toString().split('\"').join(''),
    data:data
}
}