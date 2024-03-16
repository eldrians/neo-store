import { Component } from "@angular/core";

import { ProductsHeaderComponent } from "./components/products-header/products-header.component";
import { FiltersComponent } from "./components/filters/filters.component";

import { MatSidenavModule } from "@angular/material/sidenav";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [ProductsHeaderComponent, FiltersComponent, MatSidenavModule],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  category: string | undefined;
  cols = 3;

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
