import * as Controller from '../controller/Auth/controller.js'


export default async (fastify)=>{
    fastify.post('/youtube/auth/register', Controller.registerUser)
    fastify.post('/youtube/auth/login',Controller.login)

   
}