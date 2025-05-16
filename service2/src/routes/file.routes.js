import * as Controller from '../controller/file.handler.controller.js'

export default async (fastify)=>{
fastify.post('/youtube/file/upload', Controller.upload_file);
fastify.post('/youtube/file/create_multipart_upload', Controller.create_multipart_upload);
fastify.post('/youtube/file/upload_chunk', Controller.upload_chunk);
fastify.post('/youtube/file/complete_upload', Controller.complete_upload)
fastify.get('/youtube/file/stream_file', Controller.stream_file)

}