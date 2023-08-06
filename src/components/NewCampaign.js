import React from "react";
import { useForm } from "react-hook-form";
import '../style/style.css'
import { postCampaign } from "../server/fetchApi";
function NewCampaign(){
    //postCampaign("Mati","wolt")
    const {
        register,
        handleSubmit,
        formState: { errors} ,
    } = useForm()
    const onSubmit = (data) => {
        postCampaign(data.subject, data.content)
    }
    return(
        <div className="component">
            <h1>Add Campaign</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form-to-add campaignForm">
                <p className="form-p">Temat: </p>
                <input {...register("subject", { required: true })} 
                    placeholder="subject" className="inputForm"
                />
                <p className="form-p">treść: </p>
                <input {...register("content", { required: true })} 
                    placeholder="content" className="inputForm content"
                />
                {errors.email && <span>This fields is required</span>}
                <input type="submit" className="inputFormSubmit" />
            </form>
            <p className="margin"></p>
        
        </div>

    )
}

export default NewCampaign;