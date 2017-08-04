import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Compiler }        from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';

import { Transaction } from './transaction'
import { TransactionService }  from './transaction.service';

import { EntryTransaction } from './entry-transaction';
import { EntryTransactionService } from './entry-transaction.service';

@Component({
  selector: 'transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: [ './transaction-detail.component.css', './transactions.component.css' ]
})
export class TransactionDetailComponent implements OnInit {
  transaction: Transaction;
  entryTransactions: EntryTransaction[];
  selectedEntryTransaction: EntryTransaction;

  constructor(
  	private router: Router,
    private transactionService: TransactionService,
    private entryTransactionService: EntryTransactionService,
    private route: ActivatedRoute,
    private location: Location, 
    private _compiler: Compiler
  ) {}

  ngOnInit(): void {
    this._compiler.clearCache();
    this.route.paramMap
      .switchMap((params: ParamMap) => this.transactionService.getTransaction(+params.get('id')))
      .subscribe(transaction => {
      	this.transaction = transaction;
      	this.entryTransactionService.getEntryTransactions(String(this.transaction.id)).then(
      	    entryTransactions => this.entryTransactions = entryTransactions
      	);
      });
  }

  goBack(): void {
    this.location.back();
  }
  
  onSelect(entryTransaction: EntryTransaction): void {
    this.selectedEntryTransaction = entryTransaction;
  }
  
  gotoDetail(): void {

    this.router.navigate(['/entryTransactionDetail', this.selectedEntryTransaction.id]);
  }
}