import { sleep, check } from 'k6';
import { BaseChecks, baseRest, ENDPOINTS, testeConfig, htmlReport } from "../../../../support/base/baseTest.js";
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { SharedArray } from 'k6/data';

  
export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data)
    };
  }



const data = new SharedArray('Movies', function () {
    const jsonData = JSON.parse(open('../../../../data/dynamic/filmes.json'));
    return jsonData.movie;
  });



  export const options = testeConfig.options.SpikeTeste;

const base_uri = testeConfig.enviroment.ec2.url;

const BaseRest = new baseRest(base_uri);

const baseChecks = new BaseChecks();

export default function () {
const filme = randomItem(data)

    // const payload = {
    //     title: 'Nome do Filme',
    //     description: 'Descrição do Filme',
    //     launchdate: '2023-09-21',
    //     showtimes:[
    //         'string'
    //     ]
    // };


    const urlRes = BaseRest.post(ENDPOINTS.MOVIES_ENDPOINT,filme);
    // const response = http.post(url, JSON.stringify(payload), { headers: headers });


console.log(urlRes.status_text)
console.log(urlRes.body)


    check(urlRes, {
        'FOI EU NEM ACREDITO': (r) => r.status === 201,
    });

    sleep(1);
}
