import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  public getTransactions(url: string) {
    return this.http.get(url);
  }

  public getTransactionId(url: string) {
    return this.http.get(url);
  }
}
