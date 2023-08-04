//lista odbiorców
//Lista zawiera
//Email, Imię oraz datę dodania subskrybenta
import React from "react";
import '../style/style.css'
function SubscribersList({subs}){
    console.log(subs)
    return(
        <div className="component">
            <h1>Lista Subskrybentów</h1>
            <div className="compList">{subs && subs.map(elem => {
                return(
                <div key={elem.id} className="elemList">
                    <p>Imię: {elem.name}</p>
                    <p>Email: {elem.email}</p>
                    <p>Data dodania: {elem.created}</p>
                </div>)
            })}</div>
        </div>

    )
}

export default SubscribersList;