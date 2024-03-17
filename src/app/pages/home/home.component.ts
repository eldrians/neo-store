import {
  Component,
  OnDestroy,
  OnInit,
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
import { CartService } from "../../services/cart.service";
import { Product } from "../../models/product.model";
import { Subscription } from "rxjs";
import { StoreService } from "../../services/store.service";

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
export class HomeComponent implements OnInit, OnDestroy {
  public cols: WritableSignal<number> = signal(3);

  public rowHeight: Signal<number> = computed(() => ROWS_HEIGHT[this.cols()]);

  public category!: string;

  public products!: Array<Product>;

  public sort = "desc";

  public count = "12";

  public productsSubscription!: Subscription;

  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

  public getProducts() {
    this.productsSubscription = this.storeService
      .getAllProducts(this.count, this.sort, this.category)
      .subscribe((_products) => {
        this.products = _products;
      });
  }

  public onColumnsCountChange(colsNum: number): void {
    this.cols.set(colsNum);
  }

  public onItemsCountChange(newCount: number): void {
    this.count = newCount.toString();
    this.getProducts();
  }

  public onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getProducts();
  }

  public onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }

  public onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
}
