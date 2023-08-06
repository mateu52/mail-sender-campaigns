// Formularz stworzony za pomocą 
//react-hook-form z walidacją, 
//który zawiera dwa pola: email oraz imię. 
//Data powinna zapisać się automatycznie
// Taki obiekt subskrybenta powinien zapisać się w Airtable w tabelce Subscribers

import React from "react";
import { postSubscribers } from "../server/fetchApi";
import '../style/style.css'
import { useForm } from "react-hook-form"


function AddSubscriber(){
    postSubscribers("Mati","wolt")
    const {
        register,
        handleSubmit,
        formState: { errors} ,
    } = useForm()
    const onSubmit = (data) => {
        postSubscribers(data.name, data.email)
    }
    return(
        <div className="component">
            <h1>AddSubscriber</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form-to-add">
                <p className="form-p">Imie: </p>
                <input {...register("name", { required: true })} 
                    placeholder="name" className="inputForm"
                />
                <p className="form-p">E-mail:</p>
                <input {...register("email", { required: true })} 
                    placeholder="email" className="inputForm"
                />
                {errors.email && <span>This fields is required</span>}
                <input type="submit" className="inputFormSubmit" />
            </form>
        
        
        </div>

    )
}

export default AddSubscriber;