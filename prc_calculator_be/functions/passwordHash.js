const bcrypt = require("bcrypt")

const hashPassword = async (password) => {
    hashedPassword = await bcrypt.hash(password, 10)
    return hashedPassword
}

const validatePassword = async (password, stored) => {
    let isValidated = await bcrypt.compare(password,stored)
    return isValidated
}
   
module.exports = {
    hashPassword,
    validatePassword
}