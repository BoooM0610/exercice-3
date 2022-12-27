import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-transaction-id',
  templateUrl: './transaction-id.component.html',
  styleUrls: ['./transaction-id.component.css']
})
export class TransactionIdComponent implements OnInit {

  transactionId!: any;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.transactionId = params;
        console.log('TransactionId -> ', this.transactionId);
    });
  }
}
