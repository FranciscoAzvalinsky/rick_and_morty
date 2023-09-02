let { User } = require('../DB_connection');

const postUser = async (req, res) => {
    const {email, password} = req.query;

    try{
        if (email.length === 0 || password.length === 0){
            res.status(400).send("Faltan datos");
        }
        const [user, created] = await User.findOrCreate({where: { email, password}});

        if (created){
            res.status(200).send(user);
        }
        else {
            res.status(401).send('Ya se encuentra registrado')
        }
    }
    catch(e){
        res.status(500).send("Error: " + e.message);
    }
}

module.exports = postUser;