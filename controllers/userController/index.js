const create = require('./create')
const login = require('./login')
const getUsers = require('./getUsers')
const update = require('./update')

const userController = {
    create,
    login,
    getUsers,
    update,
}

module.exports = userController