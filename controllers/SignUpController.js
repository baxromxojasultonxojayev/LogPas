
const { genereteCrypt } = require('../bcrypt')
const DATA = require('../data')
module.exports = {
    SignUpGetController: (req,res) =>{
        res.render('signup', {
            error: ""
        }) 
    },
    SignUpPostController: async (req,res)=>{
        try{
            let {login, password} = req.body
            if(login && password){
                console.log(DATA);
                if(DATA.find(x => x.login == login)){
                    throw new Error('User already existed')
                }
                const id = DATA.length === 0 ? 1 : DATA[DATA.length - 1].id +1                
                 DATA.push({
                     id: id,
                     login: login,  
                     password: await genereteCrypt(password)
                 })
                 console.log(DATA);
                 res.redirect('/')
            }else{
                throw new Error("Login or Password not found")
            }
        }catch(e){
            res.render('signup', {
                error: e + ""
            })
        }
    }
}