import { Component, EventEmitter, Output } from "@angular/core";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-products-header",
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();

  public sort = "desc";
  public itemsShowCount = 12;

  public onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  public onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
