import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, default: '' }, // Profile Picture
    subscribers: { type: Number, default: 0 },
    subscribedChannels: { type: [String], default: [] }
}, { timestamps: true });


export {
    userSchema
}