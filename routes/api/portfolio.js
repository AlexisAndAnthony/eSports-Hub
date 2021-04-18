const express = require('express');
const router = express.Router();

const Portfolio = require('../../models/Portfolio');

// @route GET api/portfolios
// @description Get all portfolios
// @access Public
router.get('/', (req, res) => {
    Portfolio.find()
        .then(portfolios => res.json(portfolios))
        .catch(err => res.status(404).json({ error: 'No portfolios found' }));
});

// @route GET api/portfolios/:user_id
// @description Get portfolio by user id
// @access Public
router.get('/:user_id', (req, res) => {
    Portfolio.findByUserId(req.params.user_id)
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ error: 'No portfolios found' }));
})

// @route POST api/portfolios
// @description add new portfolio
// @access Public
router.post('/', (req, res) => {
    Portfolio.create(req.body)
        .then(user => res.json({ msg: 'Portfolio added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add portfolio' }));
})

// @route DELETE api/portfolios/:id
router.delete('/:id', (req, res) => {
    Portfolio.findByIdAndRemove(req.params.id, req.body)
        .then(portfolio => res.json({ msg: 'Portfolio deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'Portfolio not found' }));
})


module.exports = router;