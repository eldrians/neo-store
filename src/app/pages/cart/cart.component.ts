import { Component } from "@angular/core";
import { Cart } from "../../models/cart.model";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [],
  templateUrl: "./cart.component.html",
})
export class CartComponent {
  cart: Cart = {
    items: [
      {
        id: 1,
        product: "https://via.placeholder.com/150",
        name: "snickers",
        price: 150,
        quantity: 1,
      },
    ],
  };
}
