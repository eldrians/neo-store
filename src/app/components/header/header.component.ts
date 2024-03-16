import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CurrencyPipe } from "@angular/common";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule,
    CurrencyPipe
  ],
  templateUrl: "./header.component.html",
  styles: ``,
})
export class HeaderComponent {}
