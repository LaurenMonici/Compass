import { sleep, check } from 'k6';
import { BaseChecks, baseRest, ENDPOINTS, testeConfig } from "../../../../support/base/baseTest.js";
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { SharedArray } from 'k6/data';

  
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data)
    };
  }

const data = new SharedArray('Tickets', function () {
    const jsonData = JSON.parse(open('../../../../data/dynamic/tickets.json'));
    return jsonData.tick;
  });




  export const options = testeConfig.options.SmokeTesteTresholds;

const base_uri = testeConfig.enviroment.hml.url;

const BaseRest = new baseRest(base_uri);

const baseChecks = new BaseChecks();

export default function () {
const ticket = randomItem(data)

    // const payload = {
    //     title: 'Nome do Filme',
    //     description: 'Descrição do Filme',
    //     launchdate: '2023-09-21',
    //     showtimes:[
    //         'string'
    //     ]
    // };


    const urlRes = BaseRest.post(ENDPOINTS.TICKETS_ENDPOINT,ticket);



console.log(urlRes.status_text)
console.log(urlRes.body)


    check(urlRes, {
        'FOI EU NEM ACREDITO': (r) => r.status === 201,
    });

    sleep(1);
}



















































// import { SharedArray } from 'k6/data';
// import { BaseChecks, BaseRest, ENDPOINTS, testConfig, htmlReport } from '../../support/base/baseTest.js';


// export function handleSummary(data) {
//   return {
//     "summary.html": htmlReport(data),
//   };
// }

 
// // export const options = testConfig.options.smokeThresholds;
// export const options = testConfig.options.dezProdutos;

 
// const base_uri = testConfig.enviroment.hml.url;
// const baseRest = new BaseRest(base_uri);
// const baseChecks = new BaseChecks();


// const dataP = new SharedArray('Produtos', function () {
//   const jsonDataP = JSON.parse(open('../../data/dynamic/dadosProd.json'));
//   return jsonDataP.produtos;
// });

 

 

// const BODY = {
//     email: "fulano@qa.com",
//     password: "teste",
//   };

 
// export function setup() {
//     const urlRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, BODY);

 
//     baseChecks.checkStatusCode(urlRes, 200)
//     baseChecks.checkResponseTime(urlRes, 2000)
//     baseChecks.checkErrorRate(urlRes, 0.02)
//     baseChecks.checkLatency(urlRes, 1000)
//    baseChecks.checkResponseSize(urlRes, 100000)

//    console.log(`Mensagem Retornada: ${urlRes.body}\n\n`);


//    let responseBodyLogin = JSON.parse(urlRes.body);
//    let token = responseBodyLogin.authorization;

//     // const token = urlRes.json().authorization;

//     return token;
// }

 

// export default (token) => {

//   let prodIndex = __ITER % dataP.length;
//   let prod = dataP[prodIndex];

//     // const produtos = ProdutoAleatorio();
//     // console.log(produtos);

//     // const payload = {
//     //     nome: produtos.nome, preco: produtos.preco, descricao: produtos.descricao, quantidade: produtos.quantidade,
//     // }

 
//     const header = {
//       Authorization: token
//     }

 
//   const res = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, prod, header)

//   baseChecks.checkStatusCode(res, 201)
//   baseChecks.checkResponseTime(res, 2000)
//   baseChecks.checkErrorRate(res, 0.02)
//   baseChecks.checkLatency(res, 1000)
//   baseChecks.checkResponseSize(res, 100000)

 
//   console.log(res.body);

//   // sleep(1);

// }

// // export function teardown(responseData) {
// //   const userId = responseData.responseData._id
// //   const urlRes = baseRest.del(`/usuarios/${userId}`);
// //   check(urlRes, {
// //     'status should be 200': (r) => r.status === 200
// //   })
// //   console.log(`Teardown deletando o usuario com ID ${userId}`);
// // }