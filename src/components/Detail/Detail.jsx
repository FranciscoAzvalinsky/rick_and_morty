import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './Detail.module.css';
import Button from '../Button/Button';


export default function Detail (){
   const { id } = useParams();

   const [character, setCharacter] = useState({});

 
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     return(
     <div>{
        character.name &&  
        <div className={style.divDetail}>
            <h2 className={style.h2}>{character.name}</h2>
            <p className={style.text}>Status:{character.status}</p>
            <p className={style.text}>Species:{character.species}</p>
            <p className={style.text}>Gender:{character.gender}</p>
            <p className={style.text}>Origin:{character.origin.name}</p>
            <img src={character.image} alt='Image Not Found' />
            <div className={style.divDiv}>
               <Link to = '/home'>
                  <Button text="Volver"></Button>
               </Link>
            </div>
        </div>
        }
    </div>
            )
}