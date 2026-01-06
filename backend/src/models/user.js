import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: false,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255
    },
    profilePic: {
        type: String,
        default: ''
    }
}, { timestamps: true });
const User = mongoose.model('User', userSchema);
export default User;
