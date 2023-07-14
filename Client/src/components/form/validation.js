import { useState } from "react"

//funcion para validar email y password
export default function validate(user){
    let errors = {}

    if(!user.email){
        errors.email = "enter your email"
    }
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email)){
        errors.email = "invalid email"
    }
    // if(user.email.length > 35){
    //     errors.email = "exceed character capacity"
    // }

    if(!/\d/.test(user.password)){
        errors.password = "invalid password"
    }
    if(user.password.length > 10 || user.password.length < 6){
        errors.password = "invalid password"
    }
    return errors
}