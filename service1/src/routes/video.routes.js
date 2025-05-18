import * as videoController from '../controller/Video/video.controller.js'
// import { authenticate } from '../middlewares/authentication.middleware.js';

export default async (fastify)=>{
    // fastify.addHook('preHandler', authenticate);
    fastify.post('/youtube/video/insert_video', videoController.insert_video)
}