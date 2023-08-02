import React from "react";
import '../style/style.css'
import { postCampaign } from "../server/fetchApi";
function NewCampaign(){
    postCampaign();
    return(
        <div className="component">NewCampaign</div>

    )
}

export default NewCampaign;