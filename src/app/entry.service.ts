import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Entry } from './entry';
import { EntryType } from './entry-type';

@Injectable()
export class EntryService {

    private baseUrl: string = '/api/EIDisplayTransactionController';

	constructor(private http : Http){
  	}
   
   entry: Entry;
   
  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
   
   getEntry(entryId: number, type: string): Promise<Entry> {
    let entry$ = this.http
      .get(`${this.baseUrl}/getEntry/${entryId}/${type}`, {headers: this.getHeaders()})
      .toPromise()
      .then(response => response.json() as Entry)
      .catch(handleError);

      return entry$;
  }
  
}

function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Promise.reject(errorMsg);
}