import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';

import { EntryTransaction } from './entry-transaction';
import { EntryTransactionService } from './entry-transaction.service';
import { EntryService } from './entry.service';
import { Entry } from './entry';
import { EntrySystemJournal } from './entry-system-journal';

@Component({
  selector: 'entry-transactions',
  templateUrl: './entry-transactions.component.html'
})
export class EntryTransactionsComponent implements OnInit {
  entryTransaction: EntryTransaction;
  entry: Entry;
  entrySystemJournal: EntrySystemJournal;

  constructor(
  	private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private entryService: EntryService,
    private entryTransactionService: EntryTransactionService) { }

  ngOnInit(): void {

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