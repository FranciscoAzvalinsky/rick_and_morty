import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards({characters, onClose}) {
   return <div className={styles.divCards}>
      {characters.map(chararcter => (<Card
         key={chararcter.id}
         name={chararcter.name}
         status={chararcter.status}
         species={chararcter.species}
         gender={chararcter.gender}
         origin={chararcter.origin.name}
         image={chararcter.image}
         onClose={() => onClose(chararcter.id)}
         id={chararcter.id}
         button={true}
      />))}
   </div>;
}
