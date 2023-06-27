import styles from "./card.module.css"

export default function Card(props) {
   return (
      <div className={styles.divConteiner}>

         <button className={styles.close} onClick={props.onClose}>X</button>
         <img className={styles.image} src={props.image} alt='' />
         <h2 className={styles.name}>{props.name}</h2>
         <h2 className={styles.status}>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
        
      </div>
   );
}
