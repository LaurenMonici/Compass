export const testeConfig = {
    enviroment: {
        hml: {
            url: "http://localhost:3000"
        },

        // dev: {
        //     url: 'http://localhost:3333'
        // },

        ec2: {
            url: 'http://44.201.140.60:3000'
        }
    },
    options: {
        SmokeTesteTresholds: {
            vus: 1,
            iterations: 1,
            duration: '10s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.02'],
            }
        },
        RampaDeUsers: {
            vus: 1,
            thresholds: {
                http_req_failed: ['rate <0.02'],
                http_req_duration: ['p(95)<2000'],
            },
            stages: [
                { duration: '4s', target: 10},
                { duration: '3s', target: 3},
                { duration: '2s', target: 2},
            ]
        },
        Smoke1User: {
            vus: 1,
            iterations: 1,
            duration: '10s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.02'],
            }
        },
        StressTeste: {
            vus: 1,
            thresholds: {
                http_req_failed: ['rate <0.02'],
                http_req_duration: ['p(95)<2000'],
            },
            stages: [
                { duration: '50s', target: 200},
                { duration: '10s', target: 30},
                { duration: '4s', target: 2},
            ]
        }
    }
}

