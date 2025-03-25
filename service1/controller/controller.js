import * as helper from '../helper/helper.js'
const findUser = async (req,res)=>{
    try {
        let response = await helper.getdata({Collection:'User',filterdata:req.body})
        console.log(response,"=============================");
        
        return res.status(200).send({status:true,data:response});
    } catch (error) {
        console.log(error);
        return res.status(500).send({status:false,data:error});
    }
}
export {
    findUser
}