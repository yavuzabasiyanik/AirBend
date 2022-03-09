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
        .withMessage('Please provide a valid addresss.')
        .isLength({ max: 255 })
        .withMessage('Address can not be more than 255 characters long'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid city.')
        .isLength({ max: 255 })
        .withMessage('City can not be more than 255 characters long'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid state.')
        .isLength({ max: 255 })
        .withMessage('State can not be more than 255 characters long'),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid country.')
        .isLength({ max: 255 })
        .withMessage('Country can not be more than 255 characters long'),
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid name.')
        .isLength({ max: 355 })
        .withMessage('Name can not be more than 355 characters long')
        .custom((value) => {
            return Spot.findOne({ where: { name: value } })
                .then((user) => {
                    if (user) {
                        return Promise.reject('The provided Name already in use by another account');
                    }
                });
        }),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid description.')
        .isLength({ max: 600 })
        .withMessage('Description can not be more than 600 characters long')
        .isLength({ min: 100 })
        .withMessage('Is that all you got to say about your place? Cmon...'),
    check('bedNum')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid bedNum.')
        .isFloat({ min: 1, max: 10 })
        .withMessage('Bednum has to be between 1-10.'),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid price.')
        .isFloat({ min: 100, max: 1000 })
        .withMessage('Price has to be between $100-$1000.'),
    check('img1')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid image.')
        .isURL()
        .withMessage('Enter a valid Image sir.'),
    check('img2')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid image.')
        .isURL()
        .withMessage('Enter a valid Image sir.'),
    check('img3')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid image.')
        .isURL()
        .withMessage('Enter a valid Image sir.'),
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
