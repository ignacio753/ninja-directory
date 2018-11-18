import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData() {
    //assets/ninjas.json
    return this.http.get('https://ignacio-tech-ninja-directory.firebaseio.com/.json').map(
      (res) => res.json()
    );
  }
}
