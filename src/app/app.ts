import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly author = signal<string>('');
  protected readonly amount = signal<number>(0);
  protected readonly date = signal<string>('');

  onchangeAuthor(value: string) {
    this.author.set(value);
  }

  onchangeAmount(value: string) {
    this.amount.set(parseFloat(value) || 0);
  }

  onchangeDate(value: string) {
    this.date.set(value);
  }
}
