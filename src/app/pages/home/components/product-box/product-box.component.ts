import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { NgClass } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

import { Product } from "../../../../models/product.model";

@Component({
  selector: "app-product-box",
  standalone: true,
  imports: [NgClass, CurrencyPipe, MatCardModule, MatIconModule],
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();
  product: Product | undefined = {
    id: 1,
    title: "snickers",
    price: 150,
    category: "shoes",
    description: "Description",
    image: "https://via.placeholder.com/150",
  };

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
