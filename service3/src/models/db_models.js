import mongoose from 'mongoose';
import * as allschema from './schema.js';

 const User = mongoose.model('User', allschema.userSchema);
 const Video = mongoose.model('Video', allschema.videoSchema);
 const Channel = mongoose.model('Channel', allschema.channelSchema)
 const Genre = mongoose.model('Genre', allschema.genreSchema)
 const SocialMedia = mongoose.model('SocialMedia', allschema.socialMediaSchema)
 const VideoLike = mongoose.model('VideoLike', allschema.videoLikeSchema)
 const Comment = mongoose.model('Comment', allschema.commentSchema)

export {
    User,
    Video,
    Channel,
    Genre,
    SocialMedia,
    VideoLike,
    Comment
}
