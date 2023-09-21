import http from 'k6/http';
import { check, sleep} from 'k6';
import { SharedArray } from 'k6/data'

// import { baseRest } from '../services/baseRest.js'
// import { BaseChecks } from '../support/base/baseChecks';

export const options = {
  vus: 5,
  iterations: 5,
  duration: '8s',
};

// const base_uri = 'http://localhost:3000';
// const baseRest = new BaseRest(base_uri);
// const baseChecks = new BaseChecks();


const data = new SharedArray('Users', function () {
  const jsonData = JSON.parse(open('../data/dynamic/humanos.json'));
  return jsonData.users;
});

export default () => {
  let userIndex = __ITER % data.length;
  let user = data[userIndex];


    const params = {
      headers: {
        'Content-Type': 'application/json',
        'monitor': 'false',
      },
    };

  const res = http.post('http://localhost:3000/usuarios', user);
  console.log(res.body);
  check(res, {
    'response code was 201': (res) => res.status == 201,
  });
  sleep(1);
};

 