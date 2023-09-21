import http from 'k6/http';
import { check, sleep} from 'k6';

import { BaseChecks, baseRest, ENDPOINTS, testeConfig } from "../support/base/baseTest.js";

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
  

export const options = testeConfig.options.RampaDeUsers;

 

const base_uri = testeConfig.enviroment.hml.url;

const BaseRest = new baseRest(base_uri);

const baseChecks = new BaseChecks();

export default () => {
  const urlRes = BaseRest.get(ENDPOINTS.PRODUCTS_ENDPOINT);
  sleep(1);

};
