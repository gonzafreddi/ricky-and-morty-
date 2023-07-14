import React, {useState} from "react";
import styles from "./form.module.css"
import validate from "./validation";

export default function Form({login}){
    

    const [user, setUser] = useState({email:"", password:""})
    const [errors , setErrors] = useState({email:"", password:""})



    function handleSubmit(e){

       e.preventDefault()
       
       setErrors(validate(user))
       if(!errors.email && !errors.password){
        login(user)
       }else{
        alert("incorrect user ")
       }
    }


    const handleChange = (event)=>{
        setUser({
            ...user, 
            [event.target.name]: event.target.value
        })

        setErrors(validate({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    return(
        <div className={styles.conteiner}>
            <form action="">
                <label htmlFor="">
                    {errors.email && <span>{errors.email}</span>}
                    <input value={user.email} name="email" type="text" placeholder="Enter your email" onChange={handleChange}  />
                </label>

                <label htmlFor="">
                    <input value={user.password} name="password" type="password" placeholder="Enter your password" onChange={handleChange} />
                </label>

                <input onClick={handleSubmit} type="submit" />
                
            </form>


         </div>
    )
}