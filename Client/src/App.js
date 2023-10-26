import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect } from 'react';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


function App() {

   const [characters, setCharacters] = useState([]);

   const location = useLocation();
   const navigate = useNavigate();

   const [access, setAccess] = useState(false);

   const EMAIL = 'email@hotmail.com'
   const PASSWORD = 'StrongPass1'

   function login (userData){
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
   }}

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   function onSearch(id) {

   const parsedId = parseInt(id);
   
   
   if (isNaN(parsedId)) {
      window.alert('¡Debe ser un número!');
   } else if (characters.find(data => data.id === parsedId)) {
      window.alert('¡No puedes agregar el mismo personaje más de una vez!');
   } else if (id > 826) {
      window.alert('¡No hay personajes con este ID!');
   } else {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters(oldChars => [...oldChars, data]);
            } 
         })
         .catch(error => {
            console.error('Error fetching character:', error);
            window.alert('¡Ocurrió un error al buscar el personaje!');
         });
      }
   } 

   const handleOnClose = (id) => {
      setCharacters((oldChars)=> oldChars.filter((ch)=>ch.id !== +id));
    };

   return (
      <div className='App' >
         {location.pathname !== '/' ? <Nav onSearch = {onSearch}></Nav> : null}
         <Routes>
            <Route path='/' element = {<Form login = {login}></Form>}></Route>
            <Route path = "/home" element = 
               {<Cards characters={characters} onClose ={handleOnClose}/>}></Route> 
            <Route path='/about' element = {<About></About>}></Route>   
            <Route path='/detail/:id' element = {<Detail characters={characters} onSearch = {onSearch} ></Detail>}></Route>
            <Route path='/favorites' element = {<Favorites></Favorites>}></Route> 
         </Routes>       
      </div>
   );
}

export default App;
