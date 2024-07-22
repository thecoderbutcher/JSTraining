const text = document.querySelector("#text");
const view = document.querySelector("#view");
const update = () =>{
    view.srcdoc = text.value;
}