const mongoose = require('mongoose');

const contributionSchema = new mongoose.Schema(
  {
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member', // Generates a relational lookup link directly to your congregants table
      required: [true, 'A contribution entry must be tied to a registered member profile.']
    },
    type: {
      type: String,
      required: [true, 'Please specify the contribution track allocation.'],
      enum: {
        values: ['tithe', 'donation', 'pledge_building', 'other'],
        message: 'Type must be either: tithe (አሥራት), donation, or pledge_building.'
      }
    },
    amount: {
      type: Number,
      required: [true, 'Please declare a valid monetary amount value.'],
      min: [1, 'Contribution value must be greater than zero.']
    },
    paymentMethod: {
      type: String,
      required: [true, 'Please declare the payment deposit method.'],
      enum: ['cash', 'check', 'e-transfer', 'card']
    },
    referenceNumber: {
      type: String,
      trim: true // Stores check numbers or bank e-transfer transaction IDs for audit records
    },
    notes: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true // Automatically manages createdAt and updatedAt auditing markers
  }
);

module.exports = mongoose.model('Contribution', contributionSchema);