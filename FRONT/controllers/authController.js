const superagent = require('superagent');
const { secret } = require('../config/jwt')


class authController {
    async registration(req, res){
        try{
            superagent
            .post('http://localhost:3200/auth/registration')
            .send(req.body)
            .set('accept', 'json')
            .end((err, result) => {
                if(err){
                    console.log(err)
                }
                console.log(result.status)
                res.send(result)
            });
        } catch(err){

        }
    }
    async login(req, res){
        try{
            superagent
            .post('http://localhost:3200/auth/login')
            .send(req.body)
            .set('accept', 'json')
            .end((err, result) => {
                if(result.status == 200){
                    req.session.session = req.body.nickname;
                    return res.json(result)
                }else{
                    res.json(result)
                }
            });
        } catch(err){
            
        }
    }

    async logout(req, res){
        req.session.session = null;
        res.redirect("/")
    }
}

module.exports = new authController()