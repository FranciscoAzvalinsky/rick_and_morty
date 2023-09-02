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
   //const EMAIL = 'ejemplo@gmail.com';
   //const PASSWORD = '1Password';
   const location = useLocation();

   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   useEffect(() => {


      access && navigate('/home');
   }, [access]);

/*function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   axios(`${URL}?email=${email}&password=${password}`).then(
      (response) => {
      const { access } = response.data;
      setAccess(response.data);
      access && navigate('/home');
   });
}*/

const login = async (userData) => {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   try {
      let response = await axios(`${URL}?email=${email}&password=${password}`)

      if (response?.data) {
         //const { access } = response.data;
         
         await setAccess(response.data);
         console.log('Login ' + access);
         access && navigate ('/home'); 
      };
   } catch (error) {
      window.alert('Ha ocurrido un error al intentar hacer el login: ' + error.message)
   }
}

const signUp = async (userData) => {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/signup/';
   try {
      //console.log('HOLA');
      let response = await axios.post(`${URL}?email=${email}&password=${password}`)
      console.log(response)

      if (response?.data) {
         //const { access } = response.data;
         
         await setAccess(true);
         console.log('Signup ' + access);
         access && navigate ('/home'); 
      };
   } catch (error) {
      window.alert('Ha ocurrido un error al intentar hacer el signup: ' + error.message)
   }
}

const validation = (id) => {
   const result = characters.find(character => character.id === id)
   return !!result
} 

const onSearch = async (id) => {
   if (validation(id)) {
      window.alert("Ya existe ese personaje")
      return 
   }
   try {
      const result = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

      if (result.data.name) {
         setCharacters([...characters, result.data])
      } else {
         window.alert("No existe un personaje con ese ID")
      }
   } catch(error) {
      console.log(error)
      window.alert(error.response.data)
   }
}
  /*async function onSearch(id) {
      
      if (id < 826 && id>0) {
         try{
         console.log('HOLA App')
        await axios(`http://localhost:3001/character/${id}`).then(({ data }) => {
         console.log('HOLA App post await')
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
      }
      catch(e){
         console.log(e);
         window.alert(e.response.data);
      }
       } else if (id<=0){
         window.alert("¡Debes ingersar un numero mayor a 0!")
       } 
       else if (id>=826){
         window.alert('¡No hay personajes con un ID tan alto!');
       }
      }
*/
   const onClose = (id) => {
      setCharacters(characters.filter ((characters) => characters.id !== id))
   }
   
   return (
      <div className='App'>
        {location.pathname !== '/' && <Nav onSearch={onSearch}/>} 
         <Routes>
            <Route path='/' element ={<Form login={login} signUp={signUp}/>}/>
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