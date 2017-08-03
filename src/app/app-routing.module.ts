import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { TransactionsComponent }      from './transactions.component';
import { TransactionDetailComponent }  from './transaction-detail.component';
import { EntryTransactionsComponent }      from './entry-transactions.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: TransactionDetailComponent },
  { path: 'transactions',     component: TransactionsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}