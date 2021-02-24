import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Please provide a firstname.'],
  },
  lastname: {
    type: String,
    required: [true, 'Please provide a lastname.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
  },
  salt: {
    type: String,
    required: [true, 'Please provide a salt.'],
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
