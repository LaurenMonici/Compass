import { check } from "k6";
export class BaseChecks {
    checkStatusCode(response, expectedStatus = 200) {
        check(response, {
            "Status code check": (r) => r.status === expectedStatus,
        })
    }
    checkSizeBody(response, expectedSize = 2000) {
        check(response,  {
            'body size is 11,105 bytes': (r) => r.body.length <= expectedSize,
        })  
    }

    checkErrorRate(response) {
        check(response,  {
            'check error rate': (r) => r.err <= expectedSize,
        })  
    }
}