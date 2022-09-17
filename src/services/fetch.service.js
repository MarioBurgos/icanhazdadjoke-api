export class FetchService{
    /**
     * Es un metodo asincrono que llama a la url que recibe por parametro y devuelve el response.json
     * @param {url} url, la url de donde quieres hacer Fetch 
     * @returns un objeto json con la respuesta
     */
    async fetchFromURL(url){
        let options = { method: 'GET', headers: { 'Accept' : 'application/json'}};
        let response = await fetch(url, options);
        return await response.json();
    }

}