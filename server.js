import Fastify from 'fastify';
import dotenv from 'dotenv';
import mongoose from './config/db.js';
import authRoutes from './routes/auth.js';
// import videoRoutes from './routes/video.js';
// import commentRoutes from './routes/comment.js';

dotenv.config();

const fastify = Fastify({ logger: true });

fastify.register(authRoutes, { prefix: '/auth' });
// fastify.register(videoRoutes);
// fastify.register(commentRoutes);

const start = async () => {
    try {
        await fastify.listen({ port: process.env.PORT || 5000 });
        console.log(`Server running at ${process.env.PORT}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
