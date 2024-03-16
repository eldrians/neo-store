import { Component, Input, OnInit } from "@angular/core";
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
  private _cart: Cart = { items: [] };

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];
  itemsQuantity = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.dataSource = this._cart.items;
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((acc, itemQuantity) => acc + itemQuantity, 0);
  }

  public getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotalPrice(items);
  }

  public onClearCart(): void {
    this.cartService.clearCart();
  }

  public onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }
}
