let numbersContainer = document.querySelector('.numbers-container');
for(let i = 12; i < 0; i--){
    i === 12 ? numbersContainer.innerHTML += `<div class="number-container">${i}</div>` : numbersContainer.innerHTML += `<div class="number-container">${i}</div>`;
    numbersContainer.innerHTML += `<div class="number" value=${i}>${i}</div>`;
}
