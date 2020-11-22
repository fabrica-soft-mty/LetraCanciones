export class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;

    }
    async consultarApi() {
        //hacer la peticion ala rest api
        const url = await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);
        //leerr la respuesta en JSON
        const respueta = await url.json();
        return {
            respueta
        }


    }
}