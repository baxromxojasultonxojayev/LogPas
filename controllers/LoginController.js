
const DATA = require('../data')
const { confirmHash } = require('../bcrypt')

module.exports = {
    LoginGetController: (req, res) =>{
        console.log(DATA);
        res.render('login', {
            error: ""
        })
    },
    LoginPostController: async (req, res) =>{
        try{
            let {login,password} = req.body
            if(login && password){
                
                let user = DATA.find(x => x.login == login)  
                if(!user){
                    throw new Error('User not found')
                }

                let isTrust = await confirmHash(password, user.password) 
                if(isTrust){
                    res.redirect('/')
                }else{
                    throw new Error('Password or Login is incorrect')
                }
                console.log(isTrust);
            } else{
                throw new Error('login or Passwordnot found')
            } 
        }catch(e){
            res.render('login', {
                error: e + ""
            })

        }
    } 
}