export class RankingService {
 
  /**
   * Es un metodo asincrono que llama a la url que recibe por parametro y devuelve el response.json
   * @param {url} url, la url de donde quieres hacer Fetch
   * @returns un objeto json con la respuesta
   */
  async getRanking(url) {
    // let ranking = new Promise((resolve, reject) => {
    //     fetch('/src/data/ranking.json')
    //       .then((res) => resolve(res))
    //       .catch((err) => reject(err));
    //   });
    let ranking = localStorage.getItem('ranking');
    console.log('localS:', JSON.stringify(ranking));
      return await ranking;
  }

  saveRank(ranking, joke){
    ranking.push(joke);
    localStorage.setItem('ranking', ranking);
  }


}
