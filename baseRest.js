import http from "k6/http";
import { baseService } from "./baseService.js";

export class baseRest extends baseService{
    constructor(base_uri){
        super(base_uri);
    }
    post(endpoint, body, headers={}, params={}){
        let uri = this.base_uri + endpoint;
        let options = this.buildOptions(headers, params);
        return http.post(uri, JSON.stringify(body), options);
    }

    get(endpoint, params={}){
        let uri = this.base_uri + endpoint;
        let options = this.buildOptions(params);
        return http.get(uri, options);
    }

    delete(endpoint,params={}, headers={}){
        let uri = this.base_uri + endpoint;
        let options = this.buildOptions(params,headers);
        return http.del(uri, options);
    }

    put(endpoint, body, headers={}, params={}){
        let uri = this.base_uri + endpoint;
        let options = this.buildOptions(headers, params);
        return http.put(uri, JSON.stringify(body), options);
    }

    buildOptions( headers={}, params={}){
        return{
            headers: Object.assign({'Content-Type': 'application/json'}, headers),
            params: Object.assign({},params),
        }
    }
}