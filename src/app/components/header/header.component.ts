import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CurrencyPipe } from "@angular/common";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { Cart, CartItem } from "../../models/cart.model";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule,
    CurrencyPipe,
  ],
  templateUrl: "./header.component.html",
  styles: ``,
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  constructor(private cartService: CartService) {}
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
    this.cartService.clearCart(``);
  }
}
