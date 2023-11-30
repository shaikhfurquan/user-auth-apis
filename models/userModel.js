import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a unique username"],
        unique: [true, "Username exists"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please provide a unique email"],
        unique: true
    },
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: Number },
    address: { type: String },
    profile: { type: String }
}, { timespan: true })

const UserModel = mongoose.model('User', UserSchema)

export default UserModel