import Fastify from "fastify";
import  connection  from "./config/db.js"
import { find } from "./controllers/db_controller.js"
import dotenv from "dotenv";


dotenv.config();


const fastify = Fastify({
    logger: true
});



fastify.post('/get',find)

fastify.listen({port : process.env.PORT},async (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    await connection()
    console.log('server is running on '+ process.env.PORT)

})