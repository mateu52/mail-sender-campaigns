import React , { useEffect, useState } from "react";
import '../style/style.css'
import { fetchSubscribers } from "../server/fetchApi";
function SubscribersList(){
    var moment = require('moment');
    const [subs, setSubs ] = useState();
    const FetchData = async() => {
        const data = await fetchSubscribers();
        setSubs(data)
    }
    useEffect(() => {
        FetchData()
    
    },[])
    return(
        <div className="component">
            <h1>Lista Subskrybentów</h1>
            <div className="compList subsList">{subs && subs.map(elem => {
                return(
                <div key={elem.id} className="elemList">
                    <p>Imię: {elem.name}</p>
                    <p>Email: {elem.email}</p>
                    <p>Data dodania: {moment(elem.created).format('DD/MM/YYYY')}</p>
                </div>)
            })}</div>
        </div>

    )
}

export default SubscribersList;