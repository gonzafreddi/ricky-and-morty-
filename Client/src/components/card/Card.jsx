import styles from "./card.module.css"
import { Link } from "react-router-dom";
import { addFav , removeFav} from "../../redux/action/action"
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react"
// import { addFav, removeFav } from "../../redux/action/action";

 function Card(props) {
   const {id, onClose, addFav, removeFav, myFavorites} = props

   
   const [isFav, setIsFav] = useState(false)
  

   const handleFavorite = ()=>{

      if(isFav){
         removeFav(id)
         setIsFav(false)
      }else{
         addFav(props)
         setIsFav(true)
      }
   }
 
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);




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
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
           )
         }
        
      </div>
   );
}


export const mapDispatchToProps = (dispatch)=>{
   return {
      addFav: (character)=>{
        
         dispatch(addFav(character))},

      removeFav: (id)=>{dispatch(removeFav(id))}
   }
}
// me traigo el estado global del reducer con esta funcion y lo recibo por props en mi componente 
export const mapStateToProps = (state)=>{
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)