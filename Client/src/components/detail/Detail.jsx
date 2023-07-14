import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

export default function Detail(){
    const [character, setCharacter] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(<div>
        <h1>soy el detail</h1>
        <h2 >nombre {character.name}</h2>
             <img src={character.image}/>
             <h3>Status: {character.status}</h3>

             <h3>Species: {character.species}</h3>

             <h3>Gender: {character.gender}</h3>

             <h3>Origin: {character.origin ?.name}</h3>

             <h3>ID:{character.id}</h3>
    </div>)
}