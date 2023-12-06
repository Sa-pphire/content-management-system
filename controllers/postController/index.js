const createPost = require('./create')
const getPost = require('./getPost')
const getPosts = require('./getPosts')

const postController = {
    createPost,
    getPost,
    getPosts,
}

module.exports = postController