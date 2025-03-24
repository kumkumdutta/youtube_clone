import * as Model from '../models/db_models.js'
const find = async (req,res) =>{
    let {collection} = req.query
    let {filterdata} = req.body
    try {
        let data = await Model[collection].find(filterdata)
        return res.status(200).send({status:true,data});

    } catch (error) {
        return res.status(500).send({status:false,data:error});
    }
}

const findOne = async (req,res) => {
    let {collection} = req.query
    let {filterdata} = req.body
    try {
        let data = await Model[collection].findOne(filterdata)
        return res.status(200).send({status:true,data});

    } catch (error) {
        return res.status(500).send({status:false,data:error});
    }
}



export {
    find,
    findOne
}