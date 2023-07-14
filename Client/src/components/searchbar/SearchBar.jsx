import styles from "./searchbar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
   let {onSearch} = props

   
   const [id , setId] = useState("");

  
  
  


   const handleChange = (event) =>{
      setId(event.target.value)
      console.log(id)
   } 



   return (
      <div className={styles.conteiner} >
         <input value={id} onChange={handleChange} type='search' />
         <button onClick={()=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}
