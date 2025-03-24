const findUser = (req,res)=>{
    try {
        let response = helper.getdata('users',req.body)
        return res.status(200).send({status:true,data:response});
    } catch (error) {
        return res.status(500).send({status:false,data:error});
    }
}
export {
    findUser
}