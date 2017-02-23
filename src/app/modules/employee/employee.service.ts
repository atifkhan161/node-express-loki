import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpService {
    constructor(private http: Http) {
    }

    getAllEmployees() {
        let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({headers: headers}); // Create a request option

        return this.http.get('http://localhost:3009/employee', options).map(res => {
            // If request fails, throw an Error that will be caught
            if (res.status < 200 || res.status >= 300) {
                throw new Error('This request has failed ' + res.status);
            }
            // If everything went fine, return the response
            else {
                console.log(res.json());
                return res.json();
            }
        });
    }

    save(employee) {
        let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({headers: headers}); // Create a request option

        return this.http.post('http://localhost:3009/employee', JSON.stringify(employee), options).map(res => {
            // If request fails, throw an Error that will be caught
            if (res.status < 200 || res.status >= 300) {
                throw new Error('This request has failed ' + res.status);
            }
            // If everything went fine, return the response
            else {
                console.log(res.json());
                return res.json();
            }
        });
    }
}
