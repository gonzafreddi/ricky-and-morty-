import styles from "./card.module.css"
import { Link } from "react-router-dom";



export default function Card(props) {
   const {id, onClose} = props
   return (
      <div className={styles.divConteiner}>

         <button className={styles.close} onClick={()=>{onClose(id)}}>X</button>
         <img className={styles.image} src={props.image} alt='' />
         <Link to={`/detail/${id}`}>
         <h2 className={styles.name}>{props.name}</h2>
         </Link>
         <h2 className={styles.status}>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
        
      </div>
   );
}
