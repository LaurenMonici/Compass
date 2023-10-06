import { sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { baseRest, BaseChecks, ENDPOINTS, testeConfig, htmlReport } from "../../../../support/base/baseTest.js"



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
    const res = BaseRest.delete(ENDPOINTS.MOVIES_ENDPOINT + `/${id}`);

    console.log(res.body);
   
 
    baseChecks.checkStatusCode(res, 200);
    baseChecks.checkSizeBody(res, 800);

  })

  sleep(1);
}

export function teardown() { //roda apenas 1 vez
  const { movieIds } = setup();

  movieIds.forEach(id => {
    const res = BaseRest.delete(ENDPOINTS.MOVIES_ENDPOINT + `/${id}`);
    baseChecks.checkStatusCode(res, 200);

  })
}


















// import http from 'k6/http';
// import { check, sleep } from 'k6';

// import { BaseChecks, baseRest, ENDPOINTS, testeConfig } from "../../../support/base/baseTest.js";

// import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// export function handleSummary(data) {
//   return {
//     "summary.html": htmlReport(data),
//   };
// }

// export const options = testeConfig.options.Smoke1User;

// const base_uri = testeConfig.enviroment.ec2.url;

// const BaseRest = new baseRest(base_uri);

// const baseChecks = new BaseChecks();

// export default () => {
//   // Deleta um recurso
//   const deleteResponse = BaseRest.delete(ENDPOINTS.MOVIES_ENDPOINT);
//   sleep(1);

//   // Verifica se a exclusão foi bem-sucedida (código de resposta 204 geralmente indica sucesso)
//   check(deleteResponse, {
//     'Exclusão bem-sucedida': (r) => r.status === 200,
//   });

//   // Se a exclusão for bem-sucedida, faça uma solicitação GET para buscar o recurso por ID
//   if (deleteResponse.status === 200) {
//     const resourceId = SitDzmEsZaPqm8vQ; // Substitua pelo ID real que você deseja buscar
//     const getResponse = BaseRest.get(`${ENDPOINTS.MOVIES_ENDPOINT}/${resourceId}`);

//     // Verifica se a busca por ID foi bem-sucedida (código de resposta 200 geralmente indica sucesso)
//     check(getResponse, {
//       'Busca por ID bem-sucedida': (r) => r.status === 200,
//     });

//     console.log(`Recurso com ID ${resourceId}:`, getResponse.json());
//   }
// };
























// import http from 'k6/http';
// import { check, sleep} from 'k6';

// import { BaseChecks, baseRest, ENDPOINTS, testeConfig } from "../../../support/base/baseTest.js";

// import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// export function handleSummary(data) {
//   return {
//     "summary.html": htmlReport(data),
//   };
// }
 

// export const options = testeConfig.options.Smoke1User;

 

// const base_uri = testeConfig.enviroment.ec2.url;

// const BaseRest = new baseRest(base_uri);

// const baseChecks = new BaseChecks();

// export default () => {
//   const urlRes = BaseRest.delete(ENDPOINTS.MOVIES_ENDPOINT);
//   sleep(1);

// };
