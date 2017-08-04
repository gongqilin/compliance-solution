import { Component, OnInit, Compiler } from '@angular/core';

import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService, private _compiler: Compiler) { }

  ngOnInit(): void {
    this._compiler.clearCache();
    this.transactionService.getTransactions()
      .then(transactions => this.transactions = transactions.slice(1, 5));
  }
}
