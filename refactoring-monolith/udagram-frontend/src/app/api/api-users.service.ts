import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

const API_HOST = environment.apiUsersHost;

@Injectable({
    providedIn: 'root'
})
export class ApiUsersService {
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    token: string;

    constructor(private http: HttpClient) {
    }

    static handleError(error: Error) {
        alert(error.message);
    }

    static extractData(res: HttpEvent<any>) {
        const body = res;
        return body || {};
    }

    setAuthToken(token) {
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', `jwt ${token}`);
        console.log(token);
        console.log(this.httpOptions.headers);
        this.token = token;
    }

    get(endpoint): Promise<any> {
        const url = `${API_HOST}${endpoint}`;
        const req = this.http.get(url, this.httpOptions).pipe(map(ApiUsersService.extractData));

        return req
            .toPromise()
            .catch((e) => {
                ApiUsersService.handleError(e);
                throw e;
            });
    }

    post(endpoint, data): Promise<any> {
        const url = `${API_HOST}${endpoint}`;
        return this.http.post<HttpEvent<any>>(url, data, this.httpOptions)
            .toPromise()
            .catch((e) => {
                ApiUsersService.handleError(e);
                throw e;
            });
    }
}
