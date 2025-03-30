const eventoFecha = new Date('2025-06-15T19:00:00').getTime();
const countdownInterval = setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = eventoFecha - ahora;
    
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    
    if (diferencia < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerText = "¡El gran día ha llegado!";
    }
}, 1000);
