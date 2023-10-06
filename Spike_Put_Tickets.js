import { SharedArray } from 'k6/data';
import { sleep } from 'k6';
import { baseRest, BaseChecks, ENDPOINTS, testeConfig, htmlReport } from "../../../../support/base/baseTest.js";
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

 
export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

 

const data = new SharedArray('Tickets', function () {
  const jsonData = JSON.parse(open('../../../../data/dynamic/tickets.json'));
  return jsonData.movie;
});

 
const base_uri = testeConfig.enviroment.ec2.url;
const BaseRest = new baseRest(base_uri);
const baseChecks = new BaseChecks();
export const options = testeConfig.options.SpikeTeste;
 

export function setup() {
  const res = BaseRest.get(ENDPOINTS.TICKETS_ENDPOINT);
  const ticketsIds = [];
  if (res.status === 200) {
    const data = JSON.parse(res.body);

    for (const ticket of data) {
      ticketsIds.push(ticket._id);
    }

  } else {
    console.log("É, não foi");
  }

  return { ticketsIds };
}

 
export default function () {
  const { ticketsIds } = setup();
  const ticket = randomItem(data);

  movieIds.forEach(id => {
    const res = BaseRest.put(ENDPOINTS.TICKETS_ENDPOINT + `/${id}`, ticket);

    console.log(res.status_text);
    baseChecks.checkStatusCode(res, 200);
  })
  sleep(1);

}

 