import http from 'k6/http';
import { check, sleep} from 'k6';

import { BaseChecks, baseRest, ENDPOINTS, testeConfig } from "../../../../support/base/baseTest.js";

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

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
  const res = BaseRest.get(ENDPOINTS.TICKETS_ENDPOINT);
  const ticketsIds = [];
  if (res.status === 200) {
    const data = JSON.parse(res.body);

    for (const ticket of data) {
      ticketsIds.push(ticket._id);
    }
     console.log(ticketsIds);
  } else {
    console.log("Deu ruim");
  }

  return { ticketsIds };
}

export default function () {
  const { ticketsIds } = setup(); 

  ticketsIds.forEach(id => {
    const res = BaseRest.get(ENDPOINTS.TICKETS_ENDPOINT + `/${id}`);

    console.log(res.body);
   
 
    baseChecks.checkStatusCode(res, 200);
    baseChecks.checkSizeBody(res, 800);
    // baseChecks.checkTime(res, 2000);
    // baseChecks.checkLat(res, 1000);

  })

  sleep(1);
}

export function teardown() { //roda apenas 1 vez após a execução da pricipal
  const { ticketsIds } = setup();

  ticketsIds.forEach(id => {
    const res = BaseRest.delete(ENDPOINTS.TICKETS_ENDPOINT + `/${id}`);
    baseChecks.checkStatusCode(res, 200);

  })
}
