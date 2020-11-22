//importar la clase api del archivo api.js
import { API } from './api.js'
//importar constantes de interfaz.js
import * as Ui from './interfaz.js';

Ui.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();
    //obtener datos del formulario
    const artista = document.querySelector('#artista').value,
        cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '') {
        //no mostrar nada mostrar mensaje
        Ui.divMensajes.innerHTML = 'Error... todos los campos son obligatorios';
        Ui.divMensajes.classList.add('error');
        setTimeout(() => {
            Ui.divMensajes.innerHTML = '';
            Ui.divMensajes.classList.remove('error');
        }, 3000);
    } else {
        //consultar la api
        const api = new API(artista, cancion);
        api.consultarApi().then(datos => {
            if (datos.respueta.lyrics) {
                //si la cancion existe
                const letra = datos.respueta.lyrics;
                Ui.divResultado.textContent = letra;
            } else {
                //si la cancion no existe
                Ui.divMensajes.innerHTML = 'Error... La cancion no existe prueba con otra busqueda';
                Ui.divMensajes.classList.add('error');
                setTimeout(() => {
                    Ui.divMensajes.innerHTML = '';
                    Ui.divMensajes.classList.remove('error');
                    Ui.formularioBuscar.reset();
                }, 3000);
            }
        });
    }




})