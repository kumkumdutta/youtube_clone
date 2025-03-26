import * as controller from '../controllers/db_controller.js'

export default async(fastify)=>{
     fastify.post('/service3/find', controller.find)
     fastify.post('/service3/findOne', controller.findOne)
     fastify.post('/service3/create', controller.create)
     fastify.put('/service3/updateOne', controller.updateOne)
     fastify.put('/service3/updateMany', controller.updateMany)
     fastify.delete('/service3/deleteOne', controller.deleteOne)
     fastify.delete('/service3/deleteMany', controller.deleteMany)
}