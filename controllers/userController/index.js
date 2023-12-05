const create = require('./create')
const login = require('./login')
const getUsers = require('./getUsers')

const userController = {
    create,
    login,
    getUsers
}

module.exports = userController