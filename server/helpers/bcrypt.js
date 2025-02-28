const bcrypt = require("bcryptjs")

function hashPassword(password){
    let salt = bcrypt.genSaltSync(8)
    return bcrypt.hashSync(password,salt)
}

function comparePassword(password,hash){
    return bcrypt.compareSync(password,hash)
}


module.exports = {hashPassword,comparePassword}