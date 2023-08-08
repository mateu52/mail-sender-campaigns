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
    const onDraft = (data) => {
        postCampaign(data.subject, data.content)
    }
    return(
        <div className="component">
            <h1>Add Campaign</h1>
            <form className="form-to-add campaignForm">
                <p className="form-p p">Temat: </p>
                <input {...register("subject", { required: true })} 
                    placeholder="subject" className="inputForm"
                />
                <p className="form-p p">treść: </p>
                <input {...register("content", { required: true })} 
                    placeholder="content" className="inputForm content"
                />
                {errors.email && <span>This fields is required</span>}
                <p className="submit-box">
                    <input 
                        type="submit" value="wyślij"
                        className="inputFormSubmit campaign1" 
                        onClick={handleSubmit(onSubmit)}
                    />
                    <input 
                        type="submit" value="zapisz"
                        className="inputFormSubmit campaign2" 
                        onClick={handleSubmit(onDraft)}
                        />
                    </p>
            </form>
            <p className="margin"></p>
        
        </div>

    )
}

export default NewCampaign;