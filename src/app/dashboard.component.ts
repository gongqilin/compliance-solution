import { Component, OnInit } from '@angular/core';

import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions()
      .then(transactions => this.transactions = transactions.slice(1, 5));
  }
}
