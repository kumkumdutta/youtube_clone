import fastify_multipart from '@fastify/multipart';
import Fastify from "fastify";
import dotenv from 'dotenv';
import * as allRoutes from './routes/file.routes.js'
dotenv.config();
const fastify = Fastify({
    logger : true
})
fastify.register(fastify_multipart,{
    limits : {
        fileSize : 100*1024*1024
    
}})
fastify.register(allRoutes)


fastify.listen({port: process.env.PORT},async (err,address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }               
    console.log(`server is running on ${process.env.PORT}`)    
})
