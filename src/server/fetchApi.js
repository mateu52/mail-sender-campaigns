const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env;
console.log(process.env);
const baseUrl = `https://api.airtable.com/v0/${REACT_APP_DB_ID}`;
const apiConfig = {
    subList: `${baseUrl}/Subscribers`,
    campaign: `${baseUrl}/Campaign`
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
export const postSubscribers = async ()=> {
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: `${REACT_APP_API_KEY}`}).base(`${REACT_APP_DB_ID}`);

    base('Subscribers').create([
    {
        "fields": {
        "Name": "Łukasz",
        "mail": "lukasz@gmail12.com"
        }
    }
    ], function(err, records) {
    if (err) {
        console.error(err);
        return;
    }
    // records.forEach(function (record) {
    //     console.log(record.getId());
    // });
    });
}
export const postCampaign = async () => {
    var Airtable = require('airtable');
var base = new Airtable({apiKey: `${REACT_APP_API_KEY}`}).base(`${REACT_APP_DB_ID}`);

base('Campaign').create([
  {
    "fields": {
      "subject": "Zniżka na nowy miesiąc",
      "content": "Zniżka 10% do końca miesiąca ! Pozdrawiam"
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
//   records.forEach(function (record) {
//     console.log(record.getId());
//   });
});
}
export const deleteCampaign = (event) => {
    const url =`https://api.airtable.com/v0/appJTGbZvHOc5sb7c/Campaign/${event}`;
        const apiKey = `${REACT_APP_API_KEY}`; // Wprowadź swój klucz API dla Airtable

        fetch(url, {
            method: 'DELETE',
            headers: {
            'Authorization': `Bearer ${apiKey}`
            }
        })
        .then(response => {
            if (!response.ok) {
            throw new Error('Błąd podczas usuwania kampanii.');
            }
            console.log('Kampania została usunięta.');
            // Tutaj możesz wykonać inne akcje po usunięciu kampanii, jeśli to konieczne.
        })
        .catch(error => {
            console.error('Wystąpił błąd:', error);
        });
}