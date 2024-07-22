const reloj = document.querySelector('.reloj');
const getHora = () => {
    const fecha = new Date();
    const tiempo = {
        hora: fecha.getHours(),
        minutos: fecha.getMinutes(),
        segundos: fecha.getSeconds()
    }; 

    reloj.innerHTML =`${tiempo.hora}: ${tiempo.minutos}: ${tiempo.segundos}`;
};

setInterval(getHora, 100);