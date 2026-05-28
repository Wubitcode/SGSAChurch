const Member = require('../models/Member');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/appError');

/**
 * @desc    Register a brand new congregant profile
 * @route   POST /api/members
 * @access  Private (Admin Only)
 */
exports.createMember = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, christianName, email, phoneNumber } = req.body;

  // 1. Enforce unique check if an email is supplied
  if (email) {
    const existingMember = await Member.findOne({ email });
    if (existingMember) {
      return next(new AppError('A member with this email address is already registered.', 400));
    }
  }

  // 2. Commit new record data to MongoDB
  const newMember = await Member.create({
    firstName,
    lastName,
    christianName,
    email,
    phoneNumber
  });

  res.status(201).json({
    success: true,
    message: 'Member registered successfully.',
    data: newMember
  });
});

/**
 * @desc    Fetch all registered members with optional pagination or search filtration
 * @route   GET /api/members
 * @access  Private (Admin Only)
 */
exports.getAllMembers = asyncHandler(async (req, res, next) => {
  // Simple search filter: check if user typed a specific name parameter
  const filter = {};
  if (req.query.search) {
    const searchRegex = new RegExp(req.query.search, 'i');
    filter.$or = [
      { firstName: searchRegex },
      { lastName: searchRegex },
      { christianName: searchRegex }
    ];
  }

  // Pull records from database, sorting newest submissions first
  const members = await Member.find(filter).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    results: members.length,
    data: members
  });
});