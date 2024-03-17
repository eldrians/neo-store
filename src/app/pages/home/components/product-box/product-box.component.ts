import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AsyncPipe, CurrencyPipe } from "@angular/common";
import { NgClass } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

import { Product } from "../../../../models/product.model";

@Component({
  selector: "app-product-box",
  standalone: true,
  imports: [NgClass, AsyncPipe, CurrencyPipe, MatCardModule, MatIconModule],
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent {
  @Input()
  product: Product | undefined;

  @Input()
  fullWidthMode = false;

  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
