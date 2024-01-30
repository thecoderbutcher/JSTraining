const endpoints = {
    API_URL: 'https://api.thecatapi.com/v1/images/search',
    API_URL_FAVORITE: 'https://api.thecatapi.com/v1/favourites?api_key=live_8E0sutiVRmIiC22KufYVlvStp6zufzqYm4PxfXwwoU04kTungrwDVvegusEAQBeh',
    API_URL_LIMIT: (limit=3) => `https://api.thecatapi.com/v1/images/search?limit=${limit}`,
    API_URL_KEY: (key,limit=3)=> [ 'https://api.thecatapi.com/v1/images/search', `?limit=${limit}`, '&order=Asc', `&api_key=${key}`,].join(''),
}

const cards = document.querySelectorAll('.card-cat img')
const cardsBtn = document.querySelectorAll('.card-cat button')
const delFav = document.querySelectorAll('.fav-cat button')
const michifavourites = document.querySelector('.favorite-michi-container')

const generateCards = async () => {
    const response = await fetch(endpoints.API_URL_LIMIT(2));
    const data = await response.json();
    for(let i = 0; i < cards.length; i++){
        cards[i].src = data[i].url; 
        cards[i].id = data[i].id;
    }
}

const getFavouritesMichis = async () => {
    const response = await fetch(endpoints.API_URL_FAVORITE);
    const data = await response.json();

    data.map((element) => {
        if(response.status  === 200){
            const fav = `<article class='fav-cat'><img src=${element.image.url} id=${element.image_id} alt='michi'><button>Del Fav</button></article>`;
            michifavourites.insertAdjacentHTML('beforeend',fav)
        } 
    })
}

delFav.forEach(button => {
    button.addEventListener('click', async () => {
        console.log("response.data")
        const image = button.parentNode.querySelector('img')
        const response = await fetch(endpoints.API_URL_FAVORITE+image.getAttribute('id'),{
            method: 'DELETE'
        })
    })
})


cardsBtn.forEach(button => {
    button.addEventListener('click', async () =>{
        const image = button.parentNode.querySelector('img')
        const response = await fetch(endpoints.API_URL_FAVORITE,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({image_id: image.getAttribute('id')})
            
        })
    })
}) 


document.addEventListener('DOMContentLoaded',() => {
    generateCards();
    getFavouritesMichis(); 
})

