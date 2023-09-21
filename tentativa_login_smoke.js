import { sleep } from "k6";

import { SharedArray } from "k6/data";

import { BaseChecks, BaseRest, ENDPOINTS, testConfig, htmlReport } from '../../support/base/baseTest.js';

 

export function handleSummary(data) {

  return {

    "summary.html": htmlReport(data),

  };

}

 

export let setupIterations = 0;

 

export const options = testConfig.options.smokeThresholds;

 

const base_uri = testConfig.enviroment.hml.url;

const baseRest = new BaseRest(base_uri);

const baseChecks = new BaseChecks();

 

const data = new SharedArray("Users", function () {

  const jsonData = JSON.parse(open("../../data/dynamic/dadosLogin.json"));

  return jsonData.users;

});

 

const dataU = new SharedArray("UsersU", function () {

  const jsonDataU = JSON.parse(open("../../data/dynamic/dadosUser.json"));

  return jsonDataU.users;

});

 

export function setup() {

 

  let userIndexU =  setupIterations % dataU.length;

  let userU = dataU[userIndexU];

  setupIterations ++;

 

  const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, userU)

 

  baseChecks.checkStatusCode(res, 201)

  baseChecks.checkResponseTime(res, 2000)

  baseChecks.checkLatency(res, 1000)

  baseChecks.checkResponseSize(res, 100000)

 

  console.log(res.body);

 

  return {responseData: res.json()}

 

};

 

export default () => {

 

  let userIndex = __ITER % data.length;

  let user = data[userIndex];

 

  const urlRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, user);

 

  baseChecks.checkStatusCode(urlRes, 200)

  baseChecks.checkResponseTime(urlRes, 2000)

  baseChecks.checkLatency(urlRes, 1000)

  baseChecks.checkResponseSize(urlRes, 100000)

 

  sleep(1);

};