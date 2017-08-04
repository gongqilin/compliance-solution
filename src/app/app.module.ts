import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { TransactionDetailComponent } from './transaction-detail.component';
import { TransactionsComponent }      from './transactions.component';
import { EntryTransactionsComponent }      from './entry-transactions.component';
import { TransactionService }          from './transaction.service';
import { EntryTransactionService }          from './entry-transaction.service';
import { EntryService }          from './entry.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransactionDetailComponent,
    TransactionsComponent,
    EntryTransactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [TransactionService, EntryTransactionService, EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
