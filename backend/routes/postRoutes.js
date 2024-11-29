const express = require('express');
const { createPost, deletePost, getPosts } = require('../controllers/postController');

const router = express.Router();

router.post('/', createPost);
router.delete('/:id', deletePost);
router.get('/', getPosts);

module.exports = router;
