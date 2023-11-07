
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect } from 'react';
import Nav from './components/Nav/Nav.jsx';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { alertError } from './assets/modals.js';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';
// import AllCharacters from './components/AllCharacters/AllCharacters.jsx';

function App() {

   const location = useLocation();
   const navigate = useNavigate();

   const [access, setAccess] = useState(false);

   const EMAIL = 'email@hotmail.com' //Están a la luz igual.. por eso no está en un .env
   const PASSWORD = 'StrongPass1'

   function login (userData){
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
      if (userData.password !== PASSWORD || userData.email !== EMAIL) {
         alertError('Es en serio? tienes los datos abajo... por que no simplemente los pones...');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   return (
      <div className='App' >
         {location.pathname !== '/' ? 
         <header style={{position: 'sticky', top: '0', zIndex: '2'}}><Nav></Nav></header> : 
         null}
         <Routes>
            <Route path='/' element = {<Form login = {login}></Form>}></Route>
            <Route path = "/home" element = {<Cards/>}></Route> 
            <Route path='/about' element = {<About></About>}></Route>   
            <Route path='/detail/:id' element = {<Detail></Detail>}></Route>
            <Route path='/favorites' element = {<Favorites></Favorites>}></Route> 
            {/* <Route path='/allcharacters' element = {<AllCharacters></AllCharacters>}></Route> */}
         </Routes>       
      </div>
   );
}

export default App;
