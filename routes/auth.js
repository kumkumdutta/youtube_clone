// import { Router } from 'fastify';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/users.js';

const authRoutes = async (fastify, options) => {
    fastify.post('/register', async (req, reply) => {
        try {
            const { username, email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ username, email, password: hashedPassword });

            await newUser.save();
            reply.send({ message: 'User registered successfully' });
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    fastify.post('/login', async (req, reply) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) return reply.status(404).send({ error: 'User not found' });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return reply.status(400).send({ error: 'Invalid credentials' });

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
            reply.send({ token, user });
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });
};

export default authRoutes;
