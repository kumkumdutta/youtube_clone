import { collection } from "../../utils/constant.value.js";
import * as Function from '../../utils/service2.functions.js'


const insert_video = async (req,res) => {
    try {
        let {title, description, thumbnail, video , channel_id, creator_id, duration , genre} = req.body;
    

        let obj = {
            title, description,thumbnail,video,channel_id,creator_id,duration,genre
        }

        await Function.make_db_entry({
            Collection : collection.video,
            document : obj
        })

        return res.status(201).send({"msg":"video inserted sucessfully"})

           } catch (error) {
        return res.status(400).send({err : error})
    }
}

const get_all_list_of_videos = async (req,res) => {
    try {
        const data = await Function.getdata({
            Collection : collection.video,
            filterdata : {
                limit : 10,
                Offset :0
            }
        })

        return res.status(200).send({status : true, result : data.data})
    } catch (error) {
        return res.status(400).send({err : error})
    }
}

const getGenreSpecificVideos = async (req, res) => {
    try {
        const { genre } = req.params;
        const data = await Function.getdata({
            Collection: collection.video,
            filterdata: {
                genre: genre,
                limit: 10,
                Offset: 0
            }
        });
        return res.status(200).send({ status: true, result: data.data });
    } catch (error) {
        return res.status(400).send({ err: error });
    }
};

const getChannelSpecificVideos = async (req, res) => {
    try {
        const { channel_id } = req.params;
        const data = await Function.getdata({
            Collection: collection.video,
            filterdata: {
                channel_id: channel_id,
                limit: 10,
                Offset: 0
            }
        });
        return res.status(200).send({ status: true, result: data.data });
    } catch (error) {
        return res.status(400).send({ err: error });
    }
};



export {
    insert_video
}