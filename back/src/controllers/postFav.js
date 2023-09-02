let { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        let { id, name, origin, status, image, species, gender }
         = req.body;
        if (![id, name, origin, status, image, species, gender].every(Boolean)) {
            console.log({ id, name, origin, status, image, species, gender })
            return res.status(401).send('Faltan datos');
        }
        
         await Favorite.findOrCreate({where: {id, name, origin, 
            status, image, species, gender}});
        let favorites = await Favorite.findAll();
        return res.status(200).send(favorites);
    } catch (error) {
        res.status(500).send("Error: " + error.message)
    }
    
}

module.exports = postFav;