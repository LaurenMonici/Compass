import { SharedArray } from 'k6/data';
import { sleep } from 'k6';
import { baseRest, BaseChecks, ENDPOINTS, testeConfig, htmlReport } from "../../../../support/base/baseTest.js";
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

 
export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

 

const data = new SharedArray('Movies', function () {
  const jsonData = JSON.parse(open('../../../../data/dynamic/filmes.json'));
  return jsonData.movie;
});

 
const base_uri = testeConfig.enviroment.ec2.url;
const BaseRest = new baseRest(base_uri);
const baseChecks = new BaseChecks();
export const options = testeConfig.options.LoadTeste;
 

export function setup() {
  const res = BaseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
  const movieIds = [];
  if (res.status === 200) {
    const data = JSON.parse(res.body);

    for (const movie of data) {
      movieIds.push(movie._id);
    }

  } else {
    console.log("Deu ruim");
  }

  return { movieIds };
}

 
export default function () {
  const { movieIds } = setup();
  const movie = randomItem(data);

  movieIds.forEach(id => {
    const res = BaseRest.put(ENDPOINTS.MOVIES_ENDPOINT + `/${id}`, movie);

    // console.log("DAQUI PRA BAIXO");
    console.log(res.status_text);
    baseChecks.checkStatusCode(res, 200);
    // baseChecks.checkSizeBody(res, 800);
    // baseChecks.checkTime(res, 2000);
    // baseChecks.checkLat(res, 1000);
  })
  sleep(1);

}
