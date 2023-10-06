export const testeConfig = {
    enviroment: {
        hml: {
            url: "http://localhost:3000",
            urlEC2: '18.207.218.206:3000'
        },


        ec2: {
            url: 'http://18.207.218.206:3000'
        }
    },
    options: {
        SmokeTesteTresholds: {
            vus: 1,
            iterations: 1,
            duration: '10s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<2.03'],
            }
        },
        LoadTeste: {
            vus: 1,
            thresholds: {
                http_req_failed: ['rate <0.02'],
                http_req_duration: ['p(95)<2000'],
            },
            stages: [
                { duration: '4m', target: 1000},
                { duration: '3m', target: 300},
                { duration: '1m', target: 2},
                { duration: '2s', target: 0}
            ]
        },
        StressTeste: {
            vus: 1,
            thresholds: {
                http_req_failed: ['rate <0.02'],
                http_req_duration: ['p(95)<2000'],
            },
            stages: [
                { duration: '2m', target: 1000},
                { duration: '2m', target: 1000},
                { duration: '1m', target: 0},
            ]
        },
        SpikeTeste: {
            vus: 1,
            thresholds: {
                http_req_failed: ['rate <0.02'],
                http_req_duration: ['p(95)<2000'],
            },
            stages: [
                { duration: '2m', target: 2000},
                { duration: '1m', target: 0}
            ]
        }
    }
}

