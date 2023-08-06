import { fetchCampaign, deleteCampaign } from "../server/fetchApi";
import React, { useState, useEffect} from "react";
import '../style/style.css'
function Campaign(){
    const [campaign, setCampaign ] = useState();

    const FetchData = async() => {
        const data = await fetchCampaign();
        setCampaign(data)
    }
    useEffect(() => {
        FetchData()

    },[])
    const handleDelete = (id) => {
        deleteCampaign(id);
        FetchData();
    }
    return(
        <div className="component">
            <h1>Kampanie mailowe</h1>
            <div className="compList">{campaign && campaign.map(elem => {
                return(
                <div key={elem.id} className="elemList" >
                    <p>Temat: {elem.subject}</p>
                    <p>treść: {elem.content}</p>
                    <p>stan: {elem.select} 
                        {elem.select === 'Draft' 
                        ?<input 
                            type="button" 
                            value="Usuń" 
                            onClick={() =>handleDelete(elem.id)} 
                            className="camp_button"
                        /> 
                            : null}
                    </p>
                </div>)
            })}</div>
        </div>

    )
}

export default Campaign;