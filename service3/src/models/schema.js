import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: '' }, // Profile Picture
  subscribedChannels: { type: [String], default: [] }
}, { timestamps: true });

const videoSchema = new mongoose.Schema({

  title: { type: String },
  description: { type: String },
  thumbnail: { type: String },
  video: { type: String },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  creator_id: { type: String },
  comments_id: { type: [String], default: [] },
  duration: { type: String },
  channel_id: { type: String },
  removed: { type: Number },
  genre: { type: String },

}, { timestamps: true });


const channelSchema = new mongoose.Schema({
  name: { type: String },
  user_id: { type: String },
  about: { type: String },
  subscribers: { type: Number, default: 0 },
  totalVideos: { type: Number, default: 0 },
}, { timestamps: true })

const genreSchema = new mongoose.Schema({
  name: { type: String }
}, { timestamps: true })


const socialMediaSchema = new mongoose.Schema(
  {
    facebook: { type: String },
    instagram: { type: String },
    x: { type: String },
    website: { type: String },
    channel_id: { type: String }
  }
  ,
  { timestamps: true }
)

const videoLikeSchema = new mongoose.Schema({
  user_id: String,
  video_id: String,
}, { timestamps: true })

const commentSchema = new mongoose.Schema({
  video_id: { type: String }, 
  user_id: { type: String }, 
  isParent: { type: Boolean, default: true }, 
  parent_id: { type: String }, 
  commnet_data: { type: String }, 
  like: { type: Number, default: 0 }
}, { timestamps: true })





export {
  userSchema, 
  videoSchema, 
  channelSchema, 
  genreSchema, 
  socialMediaSchema, 
  videoLikeSchema, 
  commentSchema
}

