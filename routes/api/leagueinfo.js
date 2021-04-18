const express = require('express');
const router = express.Router();

const LeagueInfo = require('../../models/LeagueInfo');

// @route GET api/leagueinfo
// @description Get all league champion info
// @access Public
router.get('/', (req, res) => {
    LeagueInfo.find()
        .then(leagueinfo => res.json(leagueinfo))
        .catch(err => res.status(404).json({ error: 'No LeagueInfo found' }));
});

// @route GET api/leagueinfos/:name
// @description Get leagueinfo by champion name
// @access Public
router.get('/:name', (req, res) => {
    LeagueInfo.findByChampionName(req.params.name)
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ error: 'No LeagueInfo found' }));
})

// @route POST api/leagueinfos
// @description add new leagueinfo
// @access Public
router.post('/', (req, res) => {
    LeagueInfo.create(req.body)
        .then(user => res.json({ msg: 'LeagueInfo added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add leagueinfo' }));
})

module.exports = router;