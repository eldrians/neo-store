import {
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from "@angular/core";

import {
  ProductsHeaderComponent,
  FiltersComponent,
  ProductBoxComponent,
} from "./components";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatGridListModule } from "@angular/material/grid-list";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    MatSidenavModule,
    MatGridListModule,
  ],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  public cols: WritableSignal<number> = signal(3);

  public rowHeight: Signal<number> = computed(() => ROWS_HEIGHT[this.cols()]);

  public category!: string;

  public onColumnsCountChange(colsNum: number): void {
    this.cols.set(colsNum);
  }

  public onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
