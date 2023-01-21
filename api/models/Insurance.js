import mongoose from 'mongoose';

const { schema } = mongoose;

const InsuranceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  establishedDate: {
    type: Date,
    required: true,
  },
  renewedDate: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
  },
  fax: { type: String },
  email: {
    type: String,
  },
});

export default mongoose.model('Insurance', InsuranceSchema);
