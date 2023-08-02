// obiektu Campaign (również dostępny w Airtable). Ten obiekt będzie zawierał pola:
// subject - tytuł wysyłanego maila
// content - treść wysyłanego maila
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
                <div key={elem.id} className="elemList" onClick={() =>handleDelete(elem.id)}>
                    <p>Temat: {elem.subject}</p>
                    <p>treść: {elem.content}</p>
                </div>)
            })}</div>
        </div>

    )
}

export default Campaign;