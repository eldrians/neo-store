import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../models/cart.model";

import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private _snackBar: MatSnackBar) {}

  public addToCart(item: CartItem): void {
    let items = [...this.cart.value.items];

    let itemInCart = items.find((_item) => _item.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items: items });
    this._snackBar.open("1 item added to cart", "Ok", { duration: 3000 });
  }

  public getTotalPrice(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((acc, totalPricePerItem) => acc + totalPricePerItem, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open("Cart is clear", "Ok", { duration: 3000 });
  }
}