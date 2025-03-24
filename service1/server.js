import Fastify from "fastify";
import dotenv from "dotenv";
import * as controller from "./controller/controller.js"

dotenv.config();

const fastify = Fastify({
    logger: true})

fastify.post('/get',controller.findUser)

fastify.listen({port: process.env.PORT},async (err,address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }               
    console.log(`server is running on ${process.env.PORT}`)    
})