
const express = require('express')
const {HomeGetController} = require('./controllers/HomeController')
const {LoginGetController, LoginPostController} = require('./controllers/LoginController')
const { SignUpGetController, SignUpPostController } = require('./controllers/SignUpController')


const app = express()

require('dotenv').config()

const PORT = process.env.PORT


app.listen(PORT, () =>{
    console.log(`SERVER IS READUY AT LocalHost:${PORT}`);
})

app.use(express.static('public'))
app.use('/bootstrap',express.static('node_modules/bootstrap/dist'))
 
app.use(express.json())
app.use(express.urlencoded({extended: true}))




app.set('view engine', 'ejs')

app.get('/', HomeGetController)
app.get('/login', LoginGetController)
app.get('/signup', SignUpGetController)

app.post('/login', LoginPostController)
app.post('/signup', SignUpPostController)

// function HomeGetController(req 


// const bcrypt = require('bcrypt')

// const saltDegree = 10

// async function genereteCrypt (data){
//     let salt = await bcrypt.genSaltSync(saltDegree)
//     let encrypt = await bcrypt.hashSync(data, salt)
//     console.log(encrypt);
// }

// async function confirmHash (data, hash){
//     let confirm = bcrypt.compareSync(data, hash)
//     return confirm
// }

// module.exports = {
//     confirmHash, genereteCrypt
// }

