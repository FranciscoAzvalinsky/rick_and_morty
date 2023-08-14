import axios from "axios";

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

/*export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };*/

 export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    try {
        
        return async (dispatch) => {
            let response = await axios.post(endpoint, character);
            if (response){
                console.log('HOLA ADDFAV')
                return dispatch({
                    type: ADD_FAV,
                    payload: response.data
                })
            }
        }
    } catch (error) {
        window.alert('Ha ocurrido un error al agregar un personaje favorito: ' + error.message)
    }
 }



/*export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
             
       });
       });
    };
 };*/

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        let response = await axios.delete(endpoint);
        if (response?.data){
            return dispatch({
                type: REMOVE_FAV,
                payload: response.data
            });
        }
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER, 
        payload: gender
    };
}

export const orderCards = (orden) => {
    return {
        type: ORDER, 
        payload: orden
    };
}