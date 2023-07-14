import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./action_type"

export function addFav(character){
    return{
        type: ADD_FAV,
        payload: character
    }
}

export function removeFav(id){
    return{
        type: REMOVE_FAV, 
        payload: id
    }
}

export function filterCards(filter){
    return{
        type: FILTER,
        payload: filter
    }
}

export function orderCards(order){
    return{
        type: ORDER,
        payload: order
    }
}

