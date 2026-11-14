// Modo navidad: paleta roja/verde/dorada, nieve y saludo.
// Se activa solo entre el 1 de diciembre y el 6 de enero; el botón permite
// encenderlo o apagarlo y la elección se recuerda en este navegador.
// Se carga en el <head> sin defer para fijar data-navidad antes del primer pintado.
(function () {
    const KEY = 'navidad';
    const root = document.documentElement;

    function enTemporada(fecha) {
        const mes = fecha.getMonth(), dia = fecha.getDate();
        return mes === 11 || (mes === 0 && dia <= 6);
    }

    function leerPreferencia() {
        try {
            return localStorage.getItem(KEY);
        } catch (e) {
            return null;
        }
    }

    function guardarPreferencia(valor) {
        try {
            localStorage.setItem(KEY, valor);
        } catch (e) {
            // Sin almacenamiento (modo privado): el cambio dura solo esta visita
        }
    }

    const preferencia = leerPreferencia();
    let activo = preferencia ? preferencia === 'on' : enTemporada(new Date());

    if (activo) root.setAttribute('data-navidad', '');

    function crearNieve() {
        const nieve = document.createElement('div');
        nieve.className = 'nieve';
        nieve.setAttribute('aria-hidden', 'true');
        for (let i = 0; i < 40; i++) {
            const copo = document.createElement('span');
            copo.className = 'copo';
            copo.textContent = '❄';
            copo.style.left = Math.random() * 100 + 'vw';
            copo.style.fontSize = (0.6 + Math.random() * 1.2).toFixed(2) + 'rem';
            copo.style.animationDuration = (8 + Math.random() * 10).toFixed(1) + 's';
            copo.style.animationDelay = (-Math.random() * 18).toFixed(1) + 's';
            copo.style.setProperty('--deriva', (Math.random() * 20 - 10).toFixed(1) + 'vw');
            nieve.appendChild(copo);
        }
        return nieve;
    }

    function crearSaludo() {
        const saludo = document.createElement('p');
        saludo.className = 'navidad-saludo';
        saludo.textContent = '¡Feliz Navidad y próspero año nuevo! 🎄';
        return saludo;
    }

    document.addEventListener('DOMContentLoaded', function () {
        const home = document.querySelector('main#home');
        let nieve = null, saludo = null;

        function aplicar() {
            root.toggleAttribute('data-navidad', activo);
            boton.setAttribute('aria-pressed', String(activo));
            if (activo) {
                nieve = nieve || document.body.appendChild(crearNieve());
                if (home) saludo = saludo || home.appendChild(crearSaludo());
            } else {
                if (nieve) nieve.remove();
                if (saludo) saludo.remove();
                nieve = saludo = null;
            }
        }

        const boton = document.createElement('button');
        boton.type = 'button';
        boton.className = 'navidad-toggle';
        boton.textContent = '🎄 Modo navidad';
        boton.addEventListener('click', function () {
            activo = !activo;
            guardarPreferencia(activo ? 'on' : 'off');
            aplicar();
        });
        document.body.appendChild(boton);
        aplicar();
    });
})();
