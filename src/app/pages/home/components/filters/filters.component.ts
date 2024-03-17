import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";

import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { StoreService } from "../../../../services/store.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-filters",
  standalone: true,
  imports: [MatExpansionModule, MatListModule],
  templateUrl: "./filters.component.html",
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();

  categoriesSubcription!: Subscription;
  categories!: Array<string>;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.categoriesSubcription = this.storeService
      .getAllCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  ngOnDestroy(): void {
    if (this.categoriesSubcription) {
      this.categoriesSubcription.unsubscribe();
    }
  }
  public onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
