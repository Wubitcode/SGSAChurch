const Contribution = require('../models/Contribution');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/appError');

/**
 * @desc    Post a new financial transaction receipt into the ledger
 * @route   POST /api/contributions
 * @access  Private (Admin / Accountant Only)
 */
exports.createContribution = asyncHandler(async (req, res, next) => {
  const { memberId, type, amount, paymentMethod, referenceNumber, notes } = req.body;

  const newRecord = await Contribution.create({
    memberId,
    type,
    amount,
    paymentMethod,
    referenceNumber,
    notes
  });

  // Pull fresh record details including populated name indicators for clean server confirmations
  const populatedRecord = await Contribution.findById(newRecord._id).populate('memberId', 'firstName lastName christianName');

  res.status(201).json({
    success: true,
    message: 'Contribution transaction logged successfully.',
    data: populatedRecord
  });
});

/**
 * @desc    Fetch comprehensive financial records with relational member profiles
 * @route   GET /api/contributions
 * @access  Private (Admin / Accountant Only)
 */
exports.getAllContributions = asyncHandler(async (req, res, next) => {
  const filter = {};
  
  // If user passes a type filter via tabs (?type=tithe)
  if (req.query.type) {
    filter.type = req.query.type;
  }

  // Fetch entries, pulling relational member legal names and baptismal names automatically
  const records = await Contribution.find(filter)
    .populate('memberId', 'firstName lastName christianName')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    results: records.length,
    data: records
  });
});