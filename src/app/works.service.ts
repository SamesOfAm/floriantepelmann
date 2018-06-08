import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WorksService {


    private _url = 'assets/static/works.json';
    constructor(private _http: Http) {
    }
    getWorks() {
        return this._http.get(this._url)
            .map((data: any) => data.json());
    }
}
