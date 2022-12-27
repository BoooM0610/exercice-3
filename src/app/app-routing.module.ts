import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionIdComponent } from './transaction-id/transaction-id.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'transaction-list', pathMatch: 'full'},
  {path: 'transaction-id', component: TransactionIdComponent},
  {path: 'transaction-list', component: TransactionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
