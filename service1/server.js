import Fastify from "fastify";
import dotenv from "dotenv";
import * as allRoutes from './routes/routes.js'

dotenv.config();

const fastify = Fastify({
    logger: true})

fastify.register(allRoutes)

fastify.listen({port: process.env.PORT},async (err,address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }               
    console.log(`server is running on ${process.env.PORT}`)    
})
