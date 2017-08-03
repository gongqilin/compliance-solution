import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Transaction } from './transaction';

@Injectable()
export class TransactionService {

    private baseUrl: string = '/api/EIDisplayTransactionController';

	constructor(private http : Http){
  	}
   
   transactions: Transaction[];
   
   
   getTransactions(): Promise<Transaction[]>{
    let transactionList$ = this.http
      .get(`${this.baseUrl}/getTransactionList`, {headers: this.getHeaders()})
      .toPromise()
      .then(response => response.json().displayTransactionVOS as Transaction[])
      .catch(handleError);
      
      console.log(transactionList$);

      return transactionList$;
  }
   
  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
   
   getTransaction(id: number): Promise<Transaction> {
    return this.getTransactions()
               .then(transactions => transactions.find(transaction => transaction.id === id));
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