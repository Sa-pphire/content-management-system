const send = require('./send')
const resetPassword = require('./reset') 

const passwordController = {
    send,
    resetPassword
}

module.exports = passwordController