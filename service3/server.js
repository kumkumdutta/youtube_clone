import Fastify from "fastify";
import  connection  from "./config/db.js"
import { find } from "./controllers/db_controller.js"


const fastify = Fastify({
    logger: true
});

fastify.post('/get',find)

fastify.listen({port : 3000},async (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    await connection()
    console.log('server is running on 3000')

})