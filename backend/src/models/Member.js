const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Legal First Name is strictly required.'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Legal Last Name is strictly required.'],
      trim: true,
    },
    christianName: {
      type: String,
      trim: true,
      default: '',
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
      lowercase: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please supply a valid email framework.'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'A primary telephone contact number is required.'],
      trim: true,
    },
    membershipStatus: {
      type: String,
      enum: ['active', 'inactive', 'suspended'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

memberSchema.index({ lastName: 1, firstName: 1 });
memberSchema.index({ phoneNumber: 1 });

module.exports = mongoose.model('Member', memberSchema);