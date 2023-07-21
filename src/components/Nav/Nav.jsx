import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';


export default function Nav({onSearch}) {
    return  (
    <nav className={style.navBar}>
        <SearchBar onSearch={onSearch}></SearchBar>
        <div className={style.divButtons}>
        <NavLink to='/about' className={style.NavLink}>
            <Button text="About"></Button>
        </NavLink>
        <NavLink to = '/home' className={style.NavLink}>
            <Button text="Home"></Button>
        </NavLink>
        <NavLink to = '/favorites' className={style.NavLink}>
            <Button text="Favorites"></Button>
        </NavLink>
        </div>
    </nav>
        )    
    }
    