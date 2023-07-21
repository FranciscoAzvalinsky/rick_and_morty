import Card from "../Card/Card"
import style from './Favorites.module.css'
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";


const Favorites  = ({myFavorites, onClose}) =>{

    const dispatch = useDispatch();

    const [aux, setAux] = useState(false);

    function handleOrder(e){
        dispatch(orderCards(e.target.value))
        setAux(!aux);
    }

    function handleFilter(e){
        dispatch(filterCards(e.target.value));
        setAux(!aux);
    }

    return <>
        <div className={style.divSelec}>
         <select onChange={handleOrder} className={style.selec}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter} className={style.selec}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
        <div className={style.divCards}>
            {myFavorites.map(fav => (<Card
            key={fav.id}
            name={fav.name}
            status={fav.status}
            species={fav.species}
            gender={fav.gender}
            origin={fav.origin}
            image={fav.image}
            onClose={() => onClose(fav.id)}
            id={fav.id}
        />))}
        </div>;
   </>
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, null)(Favorites);