import http from 'k6/http';
import { check, sleep} from 'k6';
import { BaseChecks, baseRest, ENDPOINTS, testeConfig, htmlReport } from "../../../../support/base/baseTest.js";


export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
 

export const options = testeConfig.options.SmokeTesteTresholds;

 

// const maxPerPage = 20;
//   const res = BaseRest.get(ENDPOINTS.MOVIES_ENDPOINT+`?page=1&pageSize=${maxPerPage}`);


const base_uri = testeConfig.enviroment.ec2.url;

const BaseRest = new baseRest(base_uri);

// const baseChecks = new BaseChecks();

export default () => {
  const urlRes = BaseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
  sleep(1);

};
