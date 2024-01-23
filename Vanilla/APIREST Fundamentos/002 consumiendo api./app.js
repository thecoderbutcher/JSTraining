const ACTIVITY_URL = 'https://www.boredapi.com/api/activity/';
const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

const cardCaption = document.querySelector('.card-caption');
const activityText = document.querySelector('.activity-text');
const cardImg = document.querySelector('.card-img');
const btnGenerate = document.querySelector('.generate-btn');

const generateActivity = async () => {
    const result = await (await fetch(ACTIVITY_URL)).json();
    const img = await(await fetch(DOG_URL)).json();
    cardImg.src = img.message;
    cardCaption.innerHTML = result.activity;
    activityText.innerHTML = result.link;
}

btnGenerate.addEventListener('click', generateActivity)