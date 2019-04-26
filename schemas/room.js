import mongoose from 'mongoose';

const { Schema } = mongoose;

const roomSchema = new Schema({
  member: {
    type: [String],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const model = mongoose.model('Room', roomSchema);

export default model;
