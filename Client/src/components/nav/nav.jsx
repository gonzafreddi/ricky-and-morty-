import SearchBar from "../searchbar/SearchBar"
import About from "../about/About"
import { Link } from "react-router-dom"
import styles from "./nav.module.css"

export default function Nav({onSearch}){
    return(
        <div className={styles.conteiner}>
            <div className={styles.title}><h2>Ricky and Morty</h2></div>
           <div className={styles.components}>
            
           <Link className={styles.button} to="/about">About</Link>
            <Link className={styles.button} to="/home">Home</Link>
            <Link className={styles.button} to="/favorites">Favorites</Link>
            <SearchBar onSearch={onSearch}/>
           </div>
            
     
         
           
        </div>
    )
}