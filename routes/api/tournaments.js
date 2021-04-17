const express = require('express');
const router = express.Router();

const Tournament = require('../../models/Tournament');

// @route GET api/tournaments
// @description Get all tournaments
// @access Public
router.get('/', (req, res) => {
    Tournament.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ error: 'No tournaments found' }));
});

// @route GET api/tournaments/:id
// @description Get tournament by tournament id
// @access Public
router.get('/:id', (req, res) => {
    Tournament.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ error: 'No tournaments found' }));
})

// @route POST api/tournament
// @description add new tournament
// @access Public
router.post('/', (req, res) => {
    Tournament.create(req.body)
        .then(user => res.json({ msg: 'Tournament added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add tournament' }));
})

// @route DELETE api/tournament/:id
router.delete('/:id', (req, res) => {
    Tournament.findByIdAndRemove(req.params.id, req.body)
        .then(user => res.json({ msg: 'Post deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'Tournament not found' }));
})


module.exports = router;