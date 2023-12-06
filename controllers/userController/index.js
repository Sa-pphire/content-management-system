const create = require('./create')
const login = require('./login')
const getUsers = require('./getUsers')
const update = require('./update')
const logout = require('./logout')

const userController = {
    create,
    login,
    getUsers,
    update,
    logout
}

module.exports = userController