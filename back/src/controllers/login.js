const users = require ('../utils/users')

const login = (req, res) => {
    let email = req.query.email;
    let password = req.query.password;
    let existe = false;
    users.forEach((user) => {
        if (user.email === email && user.password === password){
            res.status(200).send(JSON.stringify({'access': 'true'}))
            existe = true;
        }
    })
    if (!existe) res.status(200).send({'access': 'false'})

}

module.exports = login