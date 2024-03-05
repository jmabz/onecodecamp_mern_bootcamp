const Post = require("../models/post");

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getPost = async (req, res) => {
    try {
        const post = await Post.findOne({_id: req.params.id});

        if (!post) {
            return res.status(404).json({error: "Post not found."});
        }

        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const createPost = async (req, res) => {
    const {title, author, description, likes, comments} = req.body;

    try {
        const post = await Post.create({
            title,
            author,
            description,
            likes,
            comments
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const updatePost = async (req, res) => {
    const {title, author, description, likes} = req.body;

    try {
        const post = await Post.findByIdAndUpdate(req.params.id, {
            title,
            author,
            description,
            likes
        }, {new: true});

        if (!post) {
            return res.status(404).json({error: "Post not found."});
        }

        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);

        if (!post) {
            return res.status(404).json({error: "Post not found."});
        }

        res.status(204).json(post);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = { getPosts, getPost, createPost, updatePost, deletePost };