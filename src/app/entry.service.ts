import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Entry } from './entry';
import { EntrySystemJournal } from './entry-system-journal';
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
      .then(response => this.getSpecificEntry(type, response))
      .catch(handleError);

      return entry$;
  }
  
  private getSpecificEntry(type: string, response: Response){
    let value = EntryType[type];
    
  	switch(value){
  		case EntryType.BasicBankEntry:
                
                break;
        case EntryType.Contribution:
                
                break;
        case EntryType.DistributionInterest:
                
                break;
        case EntryType.Dividend:
                
                break;
        case EntryType.General:
                
                break;
        case EntryType.Investment:
                
                break;
        case EntryType.MemberBalance:
            
            	break;
                
         case EntryType.System:
               return response.json() as EntrySystemJournal;
               
		 default:
			    break; 
  	}
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