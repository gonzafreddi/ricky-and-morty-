import styles from "./searchbar.module.css"

export default function SearchBar(props) {
   let {onSearch} = props
   return (
      <div className={styles.conteiner} >
         <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
