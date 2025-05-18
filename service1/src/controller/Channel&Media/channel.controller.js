import { collection } from "../../utils/constant.value.js";
import * as Function from '../../utils/service2.functions.js'

const create_channel = async (req,res) => {
    try {
    let {name, user_id, about} = req.body
    let obj = {name,user_id,about}

   let data = await Function.make_db_entry({
        Collection : collection.channel,
        document : obj
    })
    if(!data.status){
        return res.status(400).send({message : "something went wrong!!"})
    }

    return res.status(201).send({message : "channel created successfully!!"})
    } catch (error) {
        return res.status(400).send({err:error})
    }
}

const get_channel_data = async (req,res) => {
    try {
    let {userid_id} = req.params
    let data = await Function.get_single_data({
        Collection : collection.channel,
        filterdata : {_id : channel_id}
    })

    return res.status(200).send({status : true, result : data})
    } catch (error) {
        return res.status(400).send({err : error})
    }
}

const update_channel = async (req,res) => {
    try {
    let {channel_id} = req.params
    let {name, about} = req.body
    let obj = {name,user_id,about}    
    let data = await Function.update_single_data({
        Collection : collection.channel,
        filterdata : {_id : channel_id},
        document : {$set : obj}
    })

    return res.status(200).send({status : true, result : data})
    } catch (error) {
        return res.status(400).send({err : error})
    }
}

const delete_channel = async (req,res) => {
    try {
    let {channel_id} = req.params
    let data = await Function.delete_single_data({
        Collection : collection.channel,
        filterdata : {_id : channel_id}
    })

    return res.status(200).send({status : true, result : data})
    } catch (error) {
        return res.status(400).send({err : error})
    }
}

const addSocialMedia = async (req,res) => {
    try {
        let {channel_id} = req.params,
        {social_media} = req.body,
        obj = {...social_media, channel_id}

      let data = await Function.make_db_entry({
            Collection : collection.social_media,
            document : obj
        })

        if(!data.status){
            return res.status(400).send({message : "something went wrong!!"})
        }

    } catch (error) {
        return res.status(400).send({err:error})
    }
}

const getSocialMedia = async (req,res) => {
    try {
        let {channel_id} = req.params
        let data = await Function.get_single_data({
            Collection : collection.social_media,
            filterdata : {channel_id}
        })
        return res.status(200).send({status : true, result : data})
    } catch (error) {
        return res.status(400).send({err : error})
    }
}

const updateSocialMedia = async (req,res) => {
    try {
        let {channel_id} = req.params
        let {social_media} = req.body
        let obj = {...social_media, channel_id}
        let data = await Function.update_single_data({
            Collection : collection.social_media,
            filterdata : {channel_id},
            document : {$set : obj}
        })
        return res.status(200).send({status : true, result : data})
    } catch (error) {
        return res.status(400).send({err : error})
    }
}






export {
    create_channel ,
    get_channel_data,
    update_channel,
    delete_channel,
    addSocialMedia,
    getSocialMedia,
    updateSocialMedia
}