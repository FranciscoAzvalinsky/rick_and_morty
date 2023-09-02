let { User } = require('../DB_connection');

const login = async (req, res) => {
    try {
        let { email, password } = req.query;
    
        if (!email || !password) {
            res.status(400).send('Faltan datos')
        }
        else {
            let newUser = await User.findOne({where: { email }});
            if (!newUser) {
                res.status(404).send('Usuario no encontrado');
            }
            else {
                if (newUser.password === password) {
                    res.status(200).send({access: true})
                }
                else {
                    res.status(403).send('Contraseña incorrecta')
                }
            }
        }
    } catch (error) {
        res.status(500).send("Error: " + error.message)
    }
  
};

module.exports = login;