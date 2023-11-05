import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect } from 'react';
import Nav from './components/Nav/Nav.jsx';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import AllCharacters from './components/AllCharacters/AllCharacters.jsx';

function App() {

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

   return (
      <div className='App' >
         {location.pathname !== '/' ? <Nav></Nav> : null}
         <Routes>
            <Route path='/' element = {<Form login = {login}></Form>}></Route>
            <Route path = "/home" element = {<Cards/>}></Route> 
            <Route path='/about' element = {<About></About>}></Route>   
            <Route path='/detail/:id' element = {<Detail></Detail>}></Route>
            <Route path='/favorites' element = {<Favorites></Favorites>}></Route> 
            <Route path='/allcharacters' element = {<AllCharacters></AllCharacters>}></Route>
         </Routes>       
      </div>
   );
}

export default App;
