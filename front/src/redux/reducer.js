import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        /*case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload],
            }
        */

            case ADD_FAV:
                return { 
                    ...state, 
                    myFavorites: action.payload, 
                    allCharacters: action.payload 
                };

        /*case REMOVE_FAV:
             return {
                 ...state,
                 myFavorites: state.myFavorites.filter((fav) => fav.id !== Number(action.payload)),
                 allCharacters: state.allCharacters.filter((fav) => fav.id !== Number(action.payload)),
            }
*/

        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: action.payload,
                allCharacters: action.payload
            };
        case FILTER:
            if (action.payload !== "All"){
                return {
                    ...state,
                    myFavorites: state.allCharacters.filter((fav) => fav.gender === action.payload)
                }
            }
            else {
                return {
                    ...state,
                    myFavorites: state.allCharacters,
                }
            }
                
        case ORDER:
            let orderedCharacters=[...state.allCharacters];
            if (action.payload === "A"){
                orderedCharacters.sort(function (a, b) {
                    if (a.id > b.id) {
                      return 1;
                    }
                    if (a.id < b.id) {
                      return -1;
                    }
                    return 0;
                  });
            }
            else {
                orderedCharacters.sort(function (a, b) {
                    if (a.id < b.id) {
                      return 1;
                    }
                    if (a.id > b.id) {
                      return -1;
                    }
                    return 0;
                  });
                }
            return{
                ...state,
                myFavorites: orderedCharacters,
            }

        default:
            return {...state};
    }
}

export default reducer;