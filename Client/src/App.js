import './App.css';
import Card from './components/card/Card.jsx';
import Cards from './components/cards/Cards';
import SearchBar from './components/searchbar/SearchBar';
// import characters, { Rick } from './data.js';
import Nav from './components/nav/nav';
import { useState } from 'react';
import axios from 'axios';
import {Routes, Route, useNavigate, useLocation} from "react-router-dom"
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Error404 from './components/error404/Error404';
import Form from './components/form/Form';
import { useEffect ,} from 'react';
import Fav from './components/favorites/Fav';



function App() {
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(true)
   
   const navigate = useNavigate()
   const EMAIL = "freddigonzalo17@gmail.com"
   const PASSWORD = "1234567"



   
   function login(user){
      if(user.email === EMAIL && user.password === PASSWORD){
         setAccess(true)
         navigate("/home")
      }

   }

   //si acces es false te devuelve al path/

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   //funcion para sacar al charcater

   function onClose(id){
      //recibo un string y lo parseo a num 
     const num = parseInt(id) 
     // filtro y me quedo solo con los q son dif id , y seteo el estado 
     const filtered = characters.filter((personaje)=> personaje.id !== num)
       //seteo el estado 
     setCharacters(filtered)
   }
  
     const location = useLocation()

   return (
      <div className='App'>
         //si location es diferente de / renderiza la nav
         {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
         
         <Routes>
            <Route  path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards onClose={onClose} characters={characters} />}/>
            <Route path='/favorites' element={<Fav/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id'element={<Detail/>}/>
            <Route path='*' element={<Error404/>    }/>
         </Routes>
      </div>
   );
}

export default App;
