import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Compiler }        from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';

import { EntryTransaction } from './entry-transaction';
import { EntryTransactionService } from './entry-transaction.service';
import { EntryService } from './entry.service';
import { Entry } from './entry';

@Component({
  selector: 'entry-transactions',
  templateUrl: './entry-transactions.component.html'
})
export class EntryTransactionsComponent implements OnInit {
  entryTransaction: EntryTransaction;
  entry: Entry;

  constructor(
  	private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private entryService: EntryService,
    private entryTransactionService: EntryTransactionService, 
    private _compiler: Compiler) { }

  ngOnInit(): void {
	this._compiler.clearCache();
    this.route.paramMap
      .switchMap((params: ParamMap) => this.entryTransactionService.getEntryTransaction(+params.get('id')))
      .subscribe(entryTransaction => {
      	this.entryTransaction = entryTransaction;
      	this.entryService.getEntry(this.entryTransaction.tEntryId, this.entryTransaction.type).then(
      		entry => this.entry = entry
      	);
      });
  }

  goBack(): void {
    this.location.back();
  }

}