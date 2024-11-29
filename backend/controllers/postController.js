const Post = require('../models/post');

const createPost = async (req, res) => {
  const { id, name, description } = req.body;
  try {
    const newPost = await Post.create({ id, name, description });
    res.status(201).json(newPost);
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(400).send('El ID proporcionado ya existe');
    } else {
      res.status(500).send('Error al crear el post');
    }
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByPk(id);
    if (post) {
      await post.destroy();
      res.status(200).json({ message: 'Post eliminado', post });
    } else {
      res.status(404).send('Post no encontrado');
    }
  } catch (err) {
    res.status(500).send('Error al eliminar el post');
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).send('Error al obtener los posts');
  }
};

module.exports = { createPost, deletePost, getPosts };
