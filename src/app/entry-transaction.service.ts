import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { EntryTransaction } from './entry-transaction';

@Injectable()
export class EntryTransactionService {

    private baseUrl: string = '/api/EIDisplayTransactionController';

	constructor(private http : Http){
  	}
   
   entryTransactions: EntryTransaction[];
   
   
   getEntryTransactions(transactionId: string): Promise<EntryTransaction[]>{
    let entrytransactionList$ = this.http
      .get(`${this.baseUrl}/getEntryTransactionList/${transactionId}`, {headers: this.getHeaders()})
      .toPromise()
      .then(response => response.json().entryTransactionList as EntryTransaction[])
      .catch(handleError);
      
      console.log(entrytransactionList$);

      return entrytransactionList$;
  }
   
  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
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