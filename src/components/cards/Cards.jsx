import Card from "../card/Card";
import styles from "./cards.module.css"

export default function Cards(props) {
   let {characters} = props

   return <div className={styles.contenedor}>
   
   <div className={styles.divConteiner}>
      {
         characters.map((person) => (<Card key = {person.id}
            name={person.name}
            status={person.status}
            species={person.species}
            gender={person.gender}
            orgin={person.origin}
            image={person.image}
            onClose ={()=> window.alert('Emulamos que se cierra la card')}
            />))
            }
      
   </div>
   </div>;
}
