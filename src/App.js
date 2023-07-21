import './App.css';
//import Card from './components/Card.jsx';

import { useState , useEffect} from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
   const [characters, setCharacters] = useState ([]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '1Password';

   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
      else{
         window.alert("¡ACCESO DENEGADO!");
      }
   }
   function onSearch(id) {
      
      if (id < 826 && id>0) {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
             const isCharacterExists = characters.find((characters) => characters.id === data.id); //Se crea un arrow. Find encuentra en el array el primer 
                                                                                                 //elemento que coincida con el solicitado. Pide que en character
                                                                                                 // el id ingresado coincida con el de data.  
             if (!isCharacterExists) {
               setCharacters((characters) => [...characters, data]); //Si el id no se repite, actualiza characters agregando el nuevo personaje
             } else {
               window.alert('¡El personaje ya está en la lista!');
             }
           }
         });
       } else if (id<=0){
         window.alert("¡Debes ingersar un numero mayor a 0!")
       } 
       else if (id>=826){
         window.alert('¡No hay personajes con un ID tan alto!');
       }
      }
     
   

   const onClose = (id) => {
      setCharacters(characters.filter ((characters) => characters.id !== id))
   }

   const location = useLocation();
   



   return (
      <div className='App'>
        {location.pathname !== '/' && <Nav onSearch={onSearch}/>} 
         <Routes>
            <Route path='/' element ={<Form login={login}/>}/>
            <Route path = '/home' element = {<Cards characters={characters} onClose ={onClose}/>}/>
            <Route path = '/about' element = {<About/>}/>
            <Route path = '/detail/:id' element = {<Detail/>}/>
            <Route path = '/favorites' element = {<Favorites onClose={onClose} button={false}/>}/>
         </Routes>
      </div>
   );
}

export default App;
// 