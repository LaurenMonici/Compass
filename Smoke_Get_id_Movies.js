import { sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { baseRest, BaseChecks, ENDPOINTS, testeConfig, htmlReport } from "../../../../support/base/baseTest.js";



export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}


const base_uri = testeConfig.enviroment.ec2.url;
const BaseRest = new baseRest(base_uri);
const baseChecks = new BaseChecks();
export const options = testeConfig.options.SmokeTesteTresholds;

export function setup() {
  const res = BaseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
  const movieIds = [];
  if (res.status === 200) {
    const data = JSON.parse(res.body);

    for (const movie of data) {
      movieIds.push(movie._id);
    }
     console.log(movieIds);
  } else {
    console.log("Deu ruim");
  }

  return { movieIds };
}

export default function () {
  const { movieIds } = setup(); 

  movieIds.forEach(id => {
    const res = BaseRest.get(ENDPOINTS.MOVIES_ENDPOINT + `/${id}`);

    console.log(res.body);
   
 
    baseChecks.checkStatusCode(res, 200);
    baseChecks.checkSizeBody(res, 800);
    // baseChecks.checkTime(res, 2000);
    // baseChecks.checkLat(res, 1000);

  })

  sleep(1);
}

export function teardown() { //roda apenas 1 vez após a execução da pricipal
  const { movieIds } = setup();

  movieIds.forEach(id => {
    const res = BaseRest.delete(ENDPOINTS.MOVIES_ENDPOINT + `/${id}`);
    baseChecks.checkStatusCode(res, 200);

  })
}
