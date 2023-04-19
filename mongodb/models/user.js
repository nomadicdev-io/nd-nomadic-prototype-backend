import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    avatar: {type: String, required: false},
    username: {type: String, required: true, unique: true},
    password: { type: String, required: true, select: false },
    dob: { type: String, required: false},
    allDestinations: [{type: mongoose.Schema.Types.ObjectId, ref: 'Destinations'}]
});

const userModel = mongoose.model('User', UserSchema);

export default userModel;