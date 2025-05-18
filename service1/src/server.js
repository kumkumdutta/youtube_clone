import Fastify from "fastify";
import dotenv from "dotenv";
import * as userRoutes from './routes/user.routes.js'
import * as authRoutes from './routes/auth.route.js'
import * as channelRoutes from './routes/channel.routes.js'
import * as videoRoutes from './routes/video.routes.js'

dotenv.config();

const fastify = Fastify({
    logger: {
        development: {
            transport: {
                target: 'pino-pretty'
            },
            serializers: {
                res(reply) {
                    return {
                        statusCode: reply.statusCode
                    }
                },
                req(request) {
                    return {
                        method: request.method,
                        url: request.url,
                        path: request.routerPath,
                        parameters: request.params,
                    };
                }
            }
        }
    }})

fastify.register(userRoutes)
fastify.register(authRoutes)
fastify.register(channelRoutes)
fastify.register(videoRoutes)

fastify.listen({port: process.env.PORT},async (err,address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }               
    console.log(`server is running on ${process.env.PORT}`)    
})
