const endpoints = {
    API_URL: 'https://api.thecatapi.com/v1/images/search',
    API_URL_LIMIT: (limit=3) => `https://api.thecatapi.com/v1/images/search?limit=${limit}`,
    API_URL_KEY: (key,limit=3)=> [ 'https://api.thecatapi.com/v1/images/search', `?limit=${limit}`, '&order=Asc', `&api_key=${key}`,].join(''),
}
console.log(endpoints.API_URL_LIMIT(5));
const cards = document.querySelectorAll('.card-cat img')

/* const generateCards = async () => {
    const result = await (await fetch(CAT_API_URL)).json();
    for(let i = 0; i < cards.length; i++){
        cards[i] = result[i].url;
        console.log(result[i].url)
    }
}

generateCards(); */

