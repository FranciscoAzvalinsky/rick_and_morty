import styles from './About.module.css';
import foto from '../../logoOG.png'

export default function About() {
    return (
        <div className={styles.divDivs}>
            <div className={styles.divText}>
                <p className={styles.text}>Mi nombre es Francisco Azvalinsky</p>
                <p className={styles.text}>Soy estudiante de Full Stack Developer en SoyHenry</p>
                <p className={styles.text}>Me encuentro cursando el M2</p>
                <p className={styles.text}>Y este es mi primer proyecto en React!</p>
                <img src={foto} alt="Henry Logo" className={styles.img}></img>
            </div>
           
        </div>
    );
}