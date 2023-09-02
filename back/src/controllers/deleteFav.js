let { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {

    const {id} = req.params;

    try {
        await Favorite.destroy({where: {id}});
        let favorites = await Favorite.findAll();
        res.status(200).send(favorites);
    } catch (error) {
        res.status(500).send("Error: " + error.message);
    }
    
};

module.exports = deleteFav;