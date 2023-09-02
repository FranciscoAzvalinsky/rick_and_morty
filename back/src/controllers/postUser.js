let { User } = require('../DB_connection');

const postUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        if (email.length === 0 || password.length === 0){
            res.status(400).send("Faltan datos");
        }
        const user = await User.findOrCreate({where: { email, password}});
        res.status(200).send(user);
    }
    catch(e){
        res.status(500).send("Error: " + e.message);
    }
}

module.exports = postUser;