import styles from "./Card.module.css";
import { NavLink } from 'react-router-dom';
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";


function Card(props) {

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   function handleFavorite (){
      if (!isFav) {
         props.addFav(props)
      }
      else{
         props.removeFav(props.id);
      }
      setIsFav(!isFav)
   }


  return (
      <div className={styles.divCard}>
         <div className={styles.divButtons}>
         {
            isFav ? (
            <button onClick={handleFavorite} className={styles.isFav}>❤️</button>
            ) : (
            <button onClick={handleFavorite} className={styles.isFav}>🤍</button>
            )
         }
         {
            props.button ? (
               <button onClick={props.onClose} className={styles.boton}>X</button>
            ) : (
            ''
            )
         }
         </div>
         {/*<button onClick={props.onClose} className={styles.boton}>X</button>*/}
         <NavLink to={`/detail/${props.id}`}>
            <h2 className={styles.name}>{props.name}</h2>
         </NavLink>
         <hr></hr><hr></hr>
         <h2 className={styles.text}>{props.status}</h2>
         <hr></hr><hr></hr>
         <h2 className={styles.text}>{props.species}</h2>
         <hr></hr><hr></hr>
         <h2 className={styles.text}>{props.gender}</h2>
         <hr></hr><hr></hr>
         <h2 className={styles.text}>{props.origin}</h2>
         <hr></hr><hr></hr>
         <img className = {styles.img} src={props.image}  alt='Error' />
      </div>
   );
}

function mapDispatchToProps (dispatch){
   return {
      addFav: (personaje) => dispatch(addFav(personaje)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card);