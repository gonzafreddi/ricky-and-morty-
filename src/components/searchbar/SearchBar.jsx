import styles from "./searchbar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
   let {onSearch} = props
   const [id , setId] = useState("");

  const handleChangue = (event) =>{
      setId(event.target.value)
      console.log(id)
   }


   return (
      <div className={styles.conteiner} >
         <input value={id} onChange={handleChangue} type='search' />
         <button onClick={()=>{onSearch(id)}}>Agregar</button>
         <p>el id es{id}</p>
      </div>
   );
}
