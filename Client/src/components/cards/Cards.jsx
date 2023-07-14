import Card from "../card/Card";
import styles from "./cards.module.css"

export default function Cards(props) {
   const {characters, onClose}= props
   console.log(onClose)

   return <div className={styles.contenedor}>
   
   <div className={styles.divConteiner}>
      {
         characters.map((person) => (<Card 
            id={person.id}
            key = {person.id}
            name={person.name}
            status={person.status}
            species={person.species}
            gender={person.gender}
            orgin={person.origin}
            image={person.image}
            onClose ={onClose}
            myFavorites={person.myFavorites}
            />))
            }
      
   </div>
   </div>;
}
