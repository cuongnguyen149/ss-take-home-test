import mongoose, { Schema, Model, Document } from 'mongoose';
import { IUser, HearFromSource } from './user.type';

export type UserDocument = IUser & Document;

const userSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  hearFromSource: {
    type: String,
    enum: Object.values(HearFromSource)
  },
  isAgreeWithTerm: {
    type: Boolean,
    required: true,
    default: true
  }
},
  {
    timestamps: true
  }
);

export const UserModel: Model<UserDocument> = mongoose.model(
  'User',
  userSchema
);