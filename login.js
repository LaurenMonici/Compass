import http from 'k6/http';
import { check, sleep} from 'k6';
import { SharedArray } from 'k6/data'

export const options = {
  vus: 1,
  duration: '3s',
};

const data = new SharedArray('Users', function () {
  const jsonData = JSON.parse(open('../data/dynamic/humanos2.json'));
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

  const res = http.post('http://localhost:3000/login', user);
  console.log(res.body);
  check(res, {
    'response code was 200': (res) => res.status == 200,
  });
  sleep(1);
};

 