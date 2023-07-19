import { ADD_FAV, FILTER, ORDER, REMOVE_FAV} from "../action/action_type"


let initialState = {
    myFavorites: [],
    allCharacter: []
}

 export default function reducer(state = initialState, action){
    switch (action.type) {
      
      // REDUCER | ADD_FAV
            case 'ADD_FAV':
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
     
            case 'REMOVE_FAV':
                return { ...state, myFavorites: action.payload };   // si el id no coincide devuelve true entconces los agrega al nuevo array filtrado 
            
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