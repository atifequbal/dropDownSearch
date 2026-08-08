import { Component } from '@angular/core';
import { AngularDropDownSearchModule, DropDownSearchItem } from 'angular-dropdown-search';

interface Customer extends DropDownSearchItem {
  id: number;
  itemName: string;
  email: string;
  plan: string;
}

@Component({
  selector: 'app-root',
  imports: [AngularDropDownSearchModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly customers: Customer[] = [
    { id: 101, itemName: 'Aarav Sharma', email: 'aarav@example.com', plan: 'Growth' },
    { id: 102, itemName: 'Maya Patel', email: 'maya@example.com', plan: 'Starter' },
    { id: 103, itemName: 'Noah Williams', email: 'noah@example.com', plan: 'Enterprise' },
    { id: 104, itemName: 'Sophia Chen', email: 'sophia@example.com', plan: 'Growth' },
    { id: 105, itemName: 'Liam Johnson', email: 'liam@example.com', plan: 'Starter' }
  ];

  protected selectedCustomer: DropDownSearchItem | null = this.customers[0];
  protected searchText = '';

  protected onSelectedItem(item: DropDownSearchItem | null): void {
    this.selectedCustomer = item;
  }

  protected onSearchValueChange(value: string): void {
    this.searchText = value;
  }
}
