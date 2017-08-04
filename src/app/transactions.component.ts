import { Component, OnInit, Compiler } from '@angular/core';
import { Router } from '@angular/router';

import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'my-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: [ './transactions.component.css' ]
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[];
  selectedTransaction: Transaction;
  p: number = 1;

  constructor(
    private router: Router,
    private transactionService: TransactionService, private _compiler: Compiler) { }

  getTransactions(): void {
    this.transactionService.getTransactions().then(transactions => this.transactions = transactions);
  }

  ngOnInit(): void {
  	this._compiler.clearCache();
    this.getTransactions();
  }

  onSelect(transaction: Transaction): void {
    this.selectedTransaction = transaction;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedTransaction.id]);
  }
}
