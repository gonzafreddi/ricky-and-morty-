import styles from "./favorites.module.css"
import { Connect, connect } from "react-redux"
import Card from "../card/Card"
import { filterCards, orderCards } from "../../redux/action/action"
import {useDispatch} from "react-redux"
import { useState } from "react"

function Fav(props){
    const dispatch = useDispatch()
    const [boolean, setBoolean] = useState(false)//nos sirve para cambiar el estado y renderizar cuando hago el ordenamineto 

    const handleOrder = (e)=>{
        dispatch(orderCards(e.target.value))
        setBoolean(!boolean)
    }

    const handleFilter = (e)=>{
        dispatch(filterCards(e.target.value))
       
    }
    return(
        <div className={styles.conteiner}>
         <div className={styles.select}> 

         <select onChange={handleOrder}>
            <option value="Ascendente">Ascendente</option>
            <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown"> unknown</option>

            </select>
         </div>

            <div className={styles.comp}>
               {
         props.favorites?.map((person) => (<Card 
            id={person.id}
            key = {person.id}
            name={person.name}
            status={person.status}
            species={person.species}
            gender={person.gender}
            orgin={person.origin}
            image={person.image}
       
            />))
            }
        </div>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return{
        favorites: state.myFavorites
    }
}


export default connect(mapStateToProps, null)(Fav)