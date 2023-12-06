const createPost = require('./create')
const getPost = require('./getPost')
const getPosts = require('./getPosts')
const updatePost = require('./update')
const deletePost = require('./delete')

const postController = {
    createPost,
    getPost,
    getPosts,
    updatePost,
    deletePost,
}

module.exports = postController