const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, Booking,Review } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();


const validateSpots = [
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid addresss.'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid city.'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid state.'),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid country.'),
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid name.'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid description.'),
    check('bedNum')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid bedNum.'),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid price.'),
    check('img1')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid image.'),
    handleValidationErrors
];


router.get('/', asyncHandler(async (req, res) => {

    const spots = await Spot.findAll({
        include: [User,Booking,Review]
    });

    res.json({ spots });
}))


router.post('/', validateSpots, asyncHandler(async (req, res) => {

    const spot = await Spot.create(req.body);

    res.json(spot);
}))









module.exports = router;
