import mongoose from 'mongoose';
import * as allschema from './schema.js';

 const User = mongoose.model('User', allschema.userSchema);

export {
    User
}
