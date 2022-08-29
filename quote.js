const quoteBtn = () =>{
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(json => displayQuotes(json))
    
}


const displayQuotes = (json) =>{
    const quoteDiv = document.getElementById('quote');
    
    quoteDiv.innerText = json.quote;
   
} 