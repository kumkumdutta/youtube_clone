import { collection } from '../../utils/constant.value.js'
import * as Function from '../../utils/service2.functions.js'


const getProfile = async (req,res) => {
     let email = req.user.email
    try {
        let data = await Function.get_single_data({
            Collection : collection.user,
            filterdata : {email}
        })
   
        
        return res.status(200).send({status:true, result : data})
    } catch (error) {
        return res.status(500).send({status:false, error: error})
    }
}

const updateProfile = async (req, res) => {
    let { id } = req.params;
    let obj = req.body
    try {
        let resp = await Function.update_single_data({
            Collection: collection.user,
            filterdata: {
                _id: id
            },
            document: {
                $set: obj
            }
        })
    } catch (error) {

    }
}

export {
    getProfile,
    updateProfile
}