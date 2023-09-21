import { SharedArray } from 'k6/data';

import { BaseChecks, BaseRest, ENDPOINTS, testConfig, ProdutoAleatorio, htmlReport } from '../../support/base/baseTest.js';

 

export function handleSummary(data) {

  return {

    "summary.html": htmlReport(data),

  };

}

 

// export const options = testConfig.options.smokeThresholds;

export const options = testConfig.options.dezProdutos;

 

const base_uri = testConfig.enviroment.hml.url;

const baseRest = new BaseRest(base_uri);

const baseChecks = new BaseChecks();

 

const dataP = new SharedArray('Produtos', function () {

  const jsonDataP = JSON.parse(open('../../data/dynamic/dadosProd.json'));

  return jsonDataP.produtos;

});

 

 

const BODY = {

    email: "fulano@qa.com",

    password: "teste",

  };

 

export function setup() {

 

    const urlRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, BODY);

 

    baseChecks.checkStatusCode(urlRes, 200)

    baseChecks.checkResponseTime(urlRes, 2000)

    baseChecks.checkErrorRate(urlRes, 0.02)

    baseChecks.checkLatency(urlRes, 1000)

   baseChecks.checkResponseSize(urlRes, 100000)

 

   console.log(`Mensagem Retornada: ${urlRes.body}\n\n`);

 

   let responseBodyLogin = JSON.parse(urlRes.body);

   let token = responseBodyLogin.authorization;

 

    // const token = urlRes.json().authorization;

 

    return token;

}

 

export default (token) => {

 

  let prodIndex = __ITER % dataP.length;

  let prod = dataP[prodIndex];

 

    // const produtos = ProdutoAleatorio();

 

    // console.log(produtos);

 

    // const payload = {

    //     nome: produtos.nome, preco: produtos.preco, descricao: produtos.descricao, quantidade: produtos.quantidade,

    // }

 

    const header = {

      Authorization: token

    }

 

  const res = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, prod, header)

 

  baseChecks.checkStatusCode(res, 201)

  baseChecks.checkResponseTime(res, 2000)

  baseChecks.checkErrorRate(res, 0.02)

  baseChecks.checkLatency(res, 1000)

  baseChecks.checkResponseSize(res, 100000)

 

  console.log(res.body);

 

  // sleep(1);

 

}

 

// export function teardown(responseData) {

//   const userId = responseData.responseData._id

//   const urlRes = baseRest.del(`/usuarios/${userId}`);

//   check(urlRes, {

//     'status should be 200': (r) => r.status === 200

//   })

//   console.log(`Teardown deletando o usuario com ID ${userId}`);

// }