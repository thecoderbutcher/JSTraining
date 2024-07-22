const color  = document.querySelector("#color");
const output = document.querySelector("#output");
color.addEventListener("input", () => {
    const selected          = color.value; 
    output.innerHTML        = selected;
    output.style.background = selected;
    output.style.color      = '#fff';

});