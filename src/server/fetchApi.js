const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env;
console.log(process.env);
const baseUrl = `https://api.airtable.com/v0/${REACT_APP_DB_ID}`;
const apiConfig = {
    subList: `${baseUrl}/Subscribers?maxRecords=3&view=Grid%20view`,
    campaign: `${baseUrl}/Campaign?maxRecords=3&view=Grid%20view`
}
const requestConfig = {
    headers : {
        Authorization: `Bearer ${REACT_APP_API_KEY}`,
    }
};

export const fetchSubscribers = async () => {
    
    const response = await fetch(apiConfig.subList, requestConfig);
    const responseData = await response.json();
    const data = [];
    responseData.records.forEach(elem => {
        data.push({ 
            id: elem.id, 
            name: elem.fields.Name, 
            email: elem.fields.mail, 
            created: elem.fields.Created })
    });
    return data;
    
}
export const fetchCampaign = async () => {
    
    const response = await fetch(apiConfig.campaign, requestConfig);
    const responseData = await response.json();
    const data = [];
    responseData.records.forEach(elem => {
        data.push({ 
            id: elem.id,
            subject: elem.fields.subject,
            content: elem.fields.content })
    });
    return data;
    
}