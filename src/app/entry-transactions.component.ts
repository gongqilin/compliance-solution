import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';

import { EntryTransaction } from './entry-transaction';
import { EntryTransactionService } from './entry-transaction.service';

@Component({
  selector: 'entry-transactions',
  templateUrl: './entry-transactions.component.html'
})
export class EntryTransactionsComponent implements OnInit {
  entryTransactions: EntryTransaction[];
  selectedEntryTransaction: EntryTransaction;

  constructor(
  	private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private entryTransactionService: EntryTransactionService) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.entryTransactionService.getEntryTransactions(String(+params.get('id'))))
      .subscribe(entryTransactions => this.entryTransactions = entryTransactions);
  }

  onSelect(entryTransaction: EntryTransaction): void {
    this.selectedEntryTransaction = entryTransaction;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedEntryTransaction.id]);
  }
}