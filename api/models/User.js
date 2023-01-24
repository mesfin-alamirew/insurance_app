import { Timestamp } from 'bson';
import mongoose from 'mongoose';
const { Schema } = mongoose;
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },

    token: {
      type: String,
    },
  },
  { timestamps: true }
);
export default mongoose.model('User', UserSchema);
