// Fatch Data from API
let apiQuotes = [];
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try{

        const respones =    await fetch(apiUrl);
        apiQuotes = await respones.json();
        console.log(apiQuotes[10]);
    }

    catch(err){
        alert("Something Want Wrong!")
    }
}

getQuotes();