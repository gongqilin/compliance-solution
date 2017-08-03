import { Component } from '@angular/core';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private transactionService: TransactionService) { }

  title = 'Compliance Solution';
}
