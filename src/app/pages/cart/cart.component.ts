import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "../../models/cart.model";
import { RouterModule } from "@angular/router";
import { CurrencyPipe } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [
    RouterModule,
    CurrencyPipe,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        id: 1,
        product: "https://via.placeholder.com/150",
        name: "snickers",
        price: 150,
        quantity: 1,
      },
      {
        id: 1,
        product: "https://via.placeholder.com/150",
        name: "snickers",
        price: 150,
        quantity: 2,
      },
      {
        id: 1,
        product: "https://via.placeholder.com/150",
        name: "snickers",
        price: 150,
        quantity: 1,
      },
    ],
  };

  constructor(private cartService: CartService) {}
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  public getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotalPrice(items);
  }
}
