const express = require('express');
const router = express.Router();

const { OAuth2Client } = require('google-auth-library');
const { token } = require('morgan');
const client = new OAuth2Client(process.env.CLIENT_ID);

const User = require('../../models/User');

// @route POST api/users/auth
// @description Authenticate user
// @access Public
router.post('/auth', (req, res) => {
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: req.body.token,
            audience: process.env.CLIENT_ID
        });

        return ticket;
    }

    const ticket = verify()
        .then(() => {
            const ticketPayload = ticket.getPayload();
            res.status(200);
        })
        .catch(console.error);
});

// @route GET api/users
// @description Get all users
// @access Public
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ error: 'No users found' }));
});

// @route GET api/users/:id
// @description Get user by user id
// @access Public
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ error: 'No user found' }));
})

// @route POST api/users
// @description add new user
// @access Public
router.post('/', (req, res) => {
    User.create(req.body)
        .then(user => res.json({ msg: 'User added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add user' }));
})

// @route PUT api/users/:id
// @description update existing user
// @access Public
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json({ msg: 'User updated successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to update user' }));
})

// @route DELETE api/users/:id
router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, req.body)
        .then(user => res.json({ msg: 'User deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'User not found' }));
})

module.exports = router;