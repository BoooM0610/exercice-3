import { TransactionService } from './transaction.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactionList!: any;
  transactionId!: any;

  constructor(private transactionService: TransactionService, private readonly router: Router) { }

  ngOnInit(): void {
    this.uploadTransactions();
  }

  public uploadTransactions():void {
    const url: string = '/assets/transactions.json';

    this.transactionService.getTransactions(url).subscribe(response => {
      console.log(response);
      this.transactionList = response;
    });
  }

  public uploadTransactionId(id: string):void {
    const url: string = '/assets/' + id + '.json';

    this.transactionService.getTransactionId(url).subscribe(response => {
      this.transactionId = response;
      console.log('Obeject -> ', this.transactionId);
      this.router.navigate(['transaction-id', this.transactionId]);
    });
  }

  public clickOrder(json: any, key: string):void {
    this.orderJson(json, key);
  }

  orderJson(json:any, key:string) {
    json.sort(function (a: any, b: any) {
      return a[key] > b[key];
    })
  }
}
