import * as Model from '../models/db_models.js'
const find = async (req,res) =>{
    let {collection} = req.query
    let filterdata = req.body

    try {
      
        
        let data = await Model[collection].find(filterdata).lean()
      
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
const create = async (req,res)=>{
    let {collection} = req.query;
    let document = req.body;
    console.log(collection,document, "queryies");
    
    try {
        let data = await new Model[collection](document).save()
        console.log(data, "hiiiiiiiiiiiiiiiiiii");
        
        return res.status(200).send({status:true,data});
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({status:false,data:error});
    }
}

const updateOne = async (req,res)=>{
    let {collection} = req.query;
    let {filterdata,document} = req.body;
    try {
        let data = await Model[collection].updateOne(filterdata,  document )
        return res.status(200).send({status:true,data});
        
    } catch (error) {
        return res.status(500).send({status:false,data:error});
    }
}

const updateMany = async (req,res)=>{
    let {collection} = req.query;
    let {filterdata,document} = req.body;
    try {
        let data = await Model[collection].updateMany(filterdata,  document )
        return res.status(200).send({status:true,data});
        
    } catch (error) {
        return res.status(500).send({status:false,data:error});
    }
}

const deleteOne = async (req,res)=>{
    let {collection} = req.query;
    let {filterdata} = req.body;
    try {
        let data = await Model[collection].deleteOne(filterdata)
        return res.status(200).send({status:true,data});
        
    } catch (error) {
        return res.status(500).send({status:false,data:error});
    }
}

const deleteMany = async (req,res)=>{
    let {collection} = req.query;
    let {filterdata} = req.body;
    try {
        let data = await Model[collection].deleteMany(filterdata)
        return res.status(200).send({status:true,data});
        
    } catch (error) {
        return res.status(500).send({status:false,data:error});
    }
}




export {
    find,
    findOne,
    create,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany
}