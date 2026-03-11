import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { ActionService } from '../../shared/services/action.service';

interface iShoppingList {
  name: string,
  quantity: number,
  price: number
};

const mockData: iShoppingList[] = [
  { name: 'laundry detergent', quantity: 1, price: 1199 },
  { name: 'tea', quantity: 2, price: 499 },
  { name: 'soap', quantity: 2, price: 1499 },
  { name: 'water', quantity: 4, price: 1799 }
];

@Component({
  selector: 'app-shopping-list',
  imports: [MaterialModule],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.scss',
  standalone: true
})

export class ShoppingList {

  displayedColumns: string[] = ['name', 'quantity', 'price'];
  dataSource = mockData;

  constructor(private actionSvc: ActionService) {}

  ngOnInit() {
    queueMicrotask(() => {
      this.actionSvc.triggerTitleAction('Shopping List');
    });
  }

  getTotalCost(): any {
    return mockData.map(d => d.price * d.quantity).reduce((acc, value) => acc + value / 100, 0);
  }

}
