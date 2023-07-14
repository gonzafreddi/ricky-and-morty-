import { ADD_FAV, FILTER, ORDER, REMOVE_FAV} from "../action/action_type"


let initialState = {
    myFavorites: [],
    allCharacter: []
}

 export default function reducer(state = initialState, action){
    switch (action.type) {
      
        case ADD_FAV:
        let copy = [...state.allCharacter, action.payload] //hago una copia de all y le agrego lo q meviene x payload
            return{
                ...state,
                myFavorites: copy, allCharacter:[...copy]
            }
     
     
            case REMOVE_FAV:
            return{
                ...state, 
                myFavorites: state.allCharacter.filter(character=> character.id !== parseInt(action.payload))
                
                // si el id no coincide devuelve true entconces los agrega al nuevo array filtrado 
            }
            case FILTER:
                return{
                    ...state,
                    myFavorites: state.allCharacter.filter((pj)=> pj.gender === action.payload)

                }
             case ORDER:
                let ordenado = state.myFavorites.sort((a,b)=>{
                    if(action.payload === "A"){
                        //menor a mayor 
                        if(a.id > b.id) return 1
                        if(a.id < b.id)return -1
                        return 0; // si son iguales no los mueve de posicion
                    }else{
                        if(a.id > b.id) return -1
                        if(a.id < b.id)return 1
                        return 0; 
                    }
                })
                return{
                    ...state,
                    myFavorites: ordenado
                }   
        default:
            return{
                ...state
            }
    }
}