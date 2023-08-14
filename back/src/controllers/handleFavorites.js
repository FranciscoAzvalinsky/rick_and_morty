let myFavorites = require ('../utils/myFavs')
//let myFavorites = [];


const postFav = (req, res) => {

    let character= req.body
    myFavorites.push(character);

    res.status(200).json(myFavorites);
}


const deleteFav = (req, res) => {
    let id = Number(req.params.id);

    myFavorites = myFavorites.filter((char) => char.id !== id)

    res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}