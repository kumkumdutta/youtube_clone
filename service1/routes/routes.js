import * as Controller from '../controller/controller.js'
import * as user_controller from '../controller/User/user.controller.js'
import { authenticate } from '../middlewares/authentication.middleware.js';

export default async (fastify)=>{
    fastify.post('/youtube/auth/register', Controller.registerUser)
    fastify.post('/youtube/auth/login',Controller.login)

    fastify.addHook('preHandler', authenticate);
    fastify.get('/youtube/user/my_profile', user_controller.getProfile)
    fastify.put('/youtube/user/update_my_profile/:id', user_controller.updateProfile)
}