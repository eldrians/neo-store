import { Component } from "@angular/core";

import { ProductsHeaderComponent } from "./components/products-header/products-header.component";

import { MatSidenavModule } from "@angular/material/sidenav";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [MatSidenavModule, ProductsHeaderComponent],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  cols = 3;

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }
}
