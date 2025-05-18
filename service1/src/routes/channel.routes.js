import * as Controller from '../controller/Channel&Media/channel.controller.js'
// import { authenticate } from '../middlewares/authentication.middleware.js';

export default async (fastify)=>{
    // fastify.addHook('preHandler', authenticate);
    fastify.post('/youtube/channel/create_channel', Controller.create_channel)
    fastify.get('/youtube/channel/get_channel_data/:userid_id', Controller.get_channel_data)
    fastify.put('/youtube/channel/update_channel/:channel_id', Controller.update_channel)
    fastify.delete('/youtube/channel/delete_channel/:channel_id', Controller.delete_channel)
    fastify.post('/youtube/channel/addSocialMedia/:channel_id', Controller.addSocialMedia)
    fastify.get('/youtube/channel/getSocialMedia/:channel_id', Controller.getSocialMedia)
    fastify.put('/youtube/channel/updateSocialMedia/:channel_id', Controller.updateSocialMedia)
   

   
}