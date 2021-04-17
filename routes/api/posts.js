const express = require('express');
const router = express.Router();

const Post = require('../../models/Post');

// @route GET api/posts
// @description Get all posts
// @access Public
router.get('/', (req, res) => {
    Post.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ error: 'No posts found' }));
});

// @route GET api/posts/:id
// @description Get post by post id
// @access Public
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ error: 'No post found' }));
})

// @route GET api/posts/:user_id
// @description Get posts by user id
// @access Public
router.get('/:user_id', (req, res) => {
    Post.findByUserId(req.params.user_id)
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ error: 'No posts found' }));
})

// @route POST api/posts
// @description add new post
// @access Public
router.post('/', (req, res) => {
    Post.create(req.body)
        .then(user => res.json({ msg: 'Post added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add post' }));
})

// @route DELETE api/users/:id
router.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id, req.body)
        .then(user => res.json({ msg: 'Post deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'Post not found' }));
})


module.exports = router;