const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {

    try{
        
        let response = await axios(`${URL}${req.params.id}`)
   
        if (response) {
            let character = {
                id: response.data.id,
                name: response.data.name,
                image: response.data.image,
                gender: response.data.gender,
                status: response.data.status,
                species: response.data.species,
                origin: response.data.origin,
            }
            res.status(200).json(character);
        } else {
            res.status(404).send('Not Found')
        }
    }
    catch (e){
        res.status(500).send(e.message)
        //window.alert('No existe un personaje con ese ID');
    }
}

/*const axios = require('axios');

const getCharById = async (id) => {
    
    let response = await axios(`https://rickandmortyapi.com/api/character/${id}`)
   
        let character = {
            id: response.data.id,
            name: response.data.name,
            image: response.data.image,
            gender: response.data.gender,
            status: response.data.status,
            species: response.data.species,
            origin: response.data.origin.name,
            
        }
        return character;
}*/

module.exports = getCharById