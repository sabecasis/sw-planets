import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  public getNoTokenHeader(){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  }
}
