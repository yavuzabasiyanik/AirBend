const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, Booking, Review } = require('../../db/models');
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
    check('img2')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid image.'),
    check('img3')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid image.'),
    handleValidationErrors
];


router.get('/', asyncHandler(async (req, res) => {

    const spots = await Spot.findAll({
        include: [User, Booking, Review]
    });

    res.json({ spots });
}))


router.post('/', validateSpots, asyncHandler(async (req, res) => {

    const spot = await Spot.create(req.body);

    res.json(spot);
}))


router.put('/:id', validateSpots, asyncHandler(async (req, res) => {
    const id = req.params.id;

    const spot = await Spot.findByPk(id);

    await spot.update(req.body);
    await spot.save();

    res.json({ spot });
}));


router.delete('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;


    const spot = await Spot.findByPk(id);

    if (!spot) throw new Error('Cannot find spot');

    // await spot.Bookings[0].destroy();
    // await spot.Reviews.destroy()

    await spot.destroy();

    res.json({ id });
}));

router.get('/bookings', asyncHandler(async (req, res) => {

    const bookings = await Booking.findAll();

    res.json({ bookings });
}))

router.post('/booking', asyncHandler(async (req, res) => {

    const booking = await Booking.create(req.body);


    res.json(booking);
}))


router.delete('/bookings/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;

    const booking = await Booking.findByPk(id);

    await booking.destroy();

    res.json({ id });
}))



module.exports = router;
