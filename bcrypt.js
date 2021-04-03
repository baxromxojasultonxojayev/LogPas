
const bcrypt = require('bcrypt')

const saltDegree = 10

async function genereteCrypt (data){
    let salt = await bcrypt.genSaltSync(saltDegree)
    let encrypt = await bcrypt.hashSync(data, salt)
    console.log(encrypt);
}

async function confirmHash (data, hash){
    let confirm = bcrypt.compareSync(data, hash)
    return confirm
}

module.exports = {
    confirmHash, genereteCrypt
}