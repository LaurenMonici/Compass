import { sleep } from 'k6';

import { SharedArray } from 'k6/data';

import { BaseChecks, baseRest, ENDPOINTS, testeConfig } from "../../support/base/baseTest.js";

 

export const options = testeConfig.options.SmokeTesteTresholds;

 

const base_uri = testeConfig.enviroment.hml.url;

const BaseRest = new baseRest(base_uri);

const baseChecks = new BaseChecks();

 

 

const data = new SharedArray('Users', function () {

  const jsonData = JSON.parse(open('../../data/static/user.json'));

  return jsonData.users;

});

 

 

const payload = {

  "nome": "Fulano da Silva",

  "email": "fulano@qa.com.br",

  "password": "teste",

  "administrador": "true",

}

const bodyEdit = {

  "nome": "Apagar",

  "email": "testetstests@qa.com.br",

  "password": "teste",

  "administrador": "true",

}

 

export function setup() {

  const res = BaseRest.post(ENDPOINTS.USER_ENDPOINT, payload);

 

 

  baseChecks.checkStatusCode(res, 201)

 

  console.log(`Usuario criado com sucesso...👦🏽`);

  return { responseData: res.json()};

}

 

export default (responseData) => {

  let userIndex = __ITER % data.length;

  let user = data[userIndex];

  const userId = responseData.responseData._id;

 

 

 

  const res = BaseRest.post(ENDPOINTS.LOGIN_ENDPOINT, user);

  const resGet = BaseRest.get(ENDPOINTS.USER_ENDPOINT);

 

  const resPut = BaseRest.put(ENDPOINTS.USER_ENDPOINT+`/${userId}`, bodyEdit)

 

 

  baseChecks.checkStatusCode(resGet, 200);

 

 

  baseChecks.checkStatusCode(res, 200);

 

 

  baseChecks.checkStatusCode(resPut, 200);

 

 

  console.log("Logando...🔐");

  sleep(1);

};

 

export function teardown(responseData) { //roda apenas 1 vez após a execução da pricipal

 

  const userId = responseData.responseData._id;

  const res = BaseRest.delete(ENDPOINTS.USER_ENDPOINT+`/${userId}`);

 

 

  baseChecks.checkStatusCode(res, 200);

  console.log(`Teardown deletando o usuário id: ${userId}  🗑️`);

 

 

 

}

 

 