const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();


const validateSignup = [
  check('email')
    .isEmail()
    .withMessage('Enter a valid Email'),
  check('profileUrl')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid image.')
    .isURL()
    .withMessage('Enter a valid Image sir.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),

  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a Password')
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a Username')
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),

  check('email')
    .isLength({ max: 255 })
    .withMessage('Email Address can not be more than 255 characters long'),

  check('username')
    .custom((value) => {
      return User.findOne({ where: { username: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Username already in use by another account');
          }
        });
    }),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please enter an Email Address')
    .custom((value) => {
      return User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),

  handleValidationErrors
];


// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username, profileUrl } = req.body;
    const user = await User.signup({ email, username, password, profileUrl });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);


module.exports = router;
