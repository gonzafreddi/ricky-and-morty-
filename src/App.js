import './App.css';
import Card from './components/card/Card.jsx';
import Cards from './components/cards/Cards';
import SearchBar from './components/searchbar/SearchBar';
// import characters, { Rick } from './data.js';
import Nav from './components/nav/nav';
import { useState } from 'react';
import axios from 'axios';
import {Routes, Route} from "react-router-dom"
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Error404 from './components/error404/Error404';



function App() {
   const [characters, setCharacters] = useState([])

 
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){
      //recibo un string y lo parseo a num 
     const num = parseInt(id) 
     // filtro y me quedo solo con los q son dif id , y seteo el estado 
     const filtered = characters.filter((personaje)=> personaje.id !== num)
       //seteo el estado 
     setCharacters(filtered)
   }
  
     

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         
         <Routes>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id'element={<Detail/>}/>
            <Route path='*' element={<Error404/>    }/>
         </Routes>
      </div>
   );
}

export default App;
