import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { ActionService } from '../../shared/services/action.service';

interface ShoppingList {
  name: string,
  quantity: number,
  price: number
};

const mockData: ShoppingList[] = [
  { name: 'laundry detergent', quantity: 1, price: 1199 },
  { name: 'tea', quantity: 2, price: 499 },
  { name: 'soap', quantity: 2, price: 1499 },
  { name: 'water', quantity: 4, price: 1799 }
];

@Component({
  selector: 'app-shop',
  imports: [MaterialModule],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
  standalone: true
})

export class Shop {

  displayedColumns: string[] = ['name', 'quantity', 'price'];
  dataSource = mockData;

  constructor(private actionSvc: ActionService) {}

  ngOnInit() {
    queueMicrotask(() => {
      this.actionSvc.triggerTitleAction('Shopping table');
    });
  }

  getTotalCost(): any {
    return mockData.map(t => t.price * t.quantity).reduce((acc, value) => acc + value / 100, 0);
  }

}
