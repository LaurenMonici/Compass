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
export const options = testeConfig.options.SmokeTesteTresholds;
 

export function setup() {
  const res = BaseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
  const movieIds = [];
  if (res.status === 200) {
    const data = JSON.parse(res.body);

    for (const movie of data) {
      movieIds.push(movie._id);
    }

  } else {
    console.log("É, não foi");
  }

  return { movieIds };
}

 
export default function () {
  const { movieIds } = setup();
  const movie = randomItem(data);

  movieIds.forEach(id => {
    const res = BaseRest.put(ENDPOINTS.MOVIES_ENDPOINT + `/${id}`, movie);

    console.log(res.status_text);
    baseChecks.checkStatusCode(res, 200);
  })
  sleep(1);

}

 

// export function teardown() { //roda apenas 1 vez após a execução da pricipal
//   const { movieIds } = setup();
//   movieIds.forEach(id => {
//     const res = BaseRest.delete(ENDPOINTS.MOVIES_ENDPOINT + `/${id}`);
//     baseChecks.checkStatusCode(res, 200);

//   })

// }

 












// import { sleep, check } from 'k6';
// import { BaseChecks, baseRest, ENDPOINTS, testeConfig } from "../../../support/base/baseTest.js";
// import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
// import { SharedArray } from 'k6/data';

  
// import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
// export function handleSummary(data) {
//     return {
//       "summary.html": htmlReport(data)
//     };
//   }



// const data = new SharedArray('Movies', function () {
//     const jsonData = JSON.parse(open('../../../data/dynamic/filmes.json'));
//     return jsonData.movie;
//   });



//   export const options = testeConfig.options.SmokeTesteTresholds;

// const base_uri = testeConfig.enviroment.ec2.url;

// const BaseRest = new baseRest(base_uri);

// const baseChecks = new BaseChecks();

// export default function () {
// const filme = randomItem(data)

//     const payload = {
//         title: 'Nome do Filme',
//         description: 'Descrição do Filme',
//         launchdate: '2023-09-21',
//         showtimes:[
//             'string'
//         ]
//     };


//     const urlRes = BaseRest.put(ENDPOINTS.MOVIES_ENDPOINT,filme);
//     // const response = http.post(url, JSON.stringify(payload), { headers: headers });


// console.log(urlRes.status_text)
// console.log(urlRes.body)


//     check(urlRes, {
//         'FOI EU NEM ACREDITO': (r) => r.status === 201,
//     });

//     sleep(1);
// }













//  //TESTE 2
// import { sleep } from 'k6';
// import { SharedArray } from 'k6/data';
// import { baseRest, BaseChecks, ENDPOINTS, testeConfig, htmlReport } from "../../../../support/base/baseTest.js";

// export function handleSummary(data) {
//   return {
//     "summary.html": htmlReport(data)
//   };
// }

// const base_uri = testeConfig.enviroment.ec2.url;
// const BaseRest = new baseRest(base_uri);
// const baseChecks = new BaseChecks();
// export const options = testeConfig.options.SmokeTeste;

// export function setup() {
//   const res = BaseRest.put(ENDPOINTS.MOVIES_ENDPOINT);
//   const movieIds = [];
//   if (res.status === 200) {
//     const data = JSON.parse(res.body);

//     for (const movie of data) {
//       movieIds.push(movie._id);
//     }
//     console.log(movieIds);
//   } else {
//     console.log("Deu ruim");
//   }

//   return { movieIds };
// }

// export default function () {
//   const { movieIds } = setup();

//   movieIds.forEach(id => {
//     // Dados que você deseja atualizar (substitua por seus próprios dados)
//     const updatedData = {
//       // Coloque os campos e valores que deseja atualizar aqui
//     };

//     // Fazer a solicitação PUT
//     const res = BaseRest.put(ENDPOINTS.MOVIES_ENDPOINT + `/${id}`, updatedData);

//     console.log(res.body);

//     baseChecks.checkStatusCode(res, 200);
//     baseChecks.checkSizeBody(res, 800);
//     // baseChecks.checkTime(res, 2000);
//     // baseChecks.checkLat(res, 1000);

//   });

//   sleep(1);
// }

// export function teardown() {
//   const { movieIds } = setup();

//   movieIds.forEach(id => {
//     // Dados que você deseja usar para a solicitação DELETE (se necessário)
//     const deleteData = {
//       // Coloque os campos e valores necessários para a solicitação DELETE aqui
//     };

//     // Fazer a solicitação DELETE (se necessário)
//     const res = BaseRest.delete(ENDPOINTS.MOVIES_ENDPOINT + `/${id}`, deleteData);

//     baseChecks.checkStatusCode(res, 200);

//   });
// }
















//TESTE 1

// import { sleep } from 'k6';
// import { SharedArray } from 'k6/data';
// import { baseRest, BaseChecks, ENDPOINTS, testeConfig, htmlReport } from "../../../support/base/baseTest.js";


// export function handleSummary(data) {
//     return {
//       "summary.html": htmlReport(data)
//     };
//   }



//   const payload = JSON.stringify({
//     title: 'Novo Título do Filme',
//     description: 'Nova Descrição do Filme',
//   });

//   const params = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };




// const base_uri = testeConfig.enviroment.ec2.url;
// const BaseRest = new baseRest(base_uri);
// const baseChecks = new BaseChecks();
// export const options = testeConfig.options.SmokeTesteTresholds;





// export function setup() {
//   const res = BaseRest.put(ENDPOINTS.MOVIES_ENDPOINT);
//   const movieIds = [];
//   if (res.status === 200) {
//     const data = JSON.parse(res.body);

//     for (const movie of data) {
//       movieIds.push(movie._id);
//     }
//      console.log(movieIds);
//   } else {
//     console.log("Deu ruim");
//   }

//   return { movieIds };
// }

// export default function () {
//   const { movieIds } = setup(); 

//   movieIds.forEach(id => {
//     const res = BaseRest.get(ENDPOINTS.MOVIES_ENDPOINT + `/${id}`);

//     console.log(res.body);
   
 
//     baseChecks.checkStatusCode(res, 200);
//     baseChecks.checkSizeBody(res, 800);
//     // baseChecks.checkTime(res, 2000);
//     // baseChecks.checkLat(res, 1000);

//   })

//   sleep(1);
// }

// export function teardown() { //roda apenas 1 vez após a execução da pricipal
//   const { movieIds } = setup();

//   movieIds.forEach(id => {
//     const res = BaseRest.delete(ENDPOINTS.MOVIES_ENDPOINT + `/${id}`);
//     baseChecks.checkStatusCode(res, 200);

//   })
// }
