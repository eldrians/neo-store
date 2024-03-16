import { Component, Input } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { NgClass } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-product-box",
  standalone: true,
  imports: [NgClass, CurrencyPipe, MatCardModule, MatIconModule],
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
}
