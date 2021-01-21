import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { SistemComponent } from "./sistem.component";

import { RouterModule } from "@angular/router";
import { SistemRoutes } from "./sistem.routing";

@NgModule({
  declarations: [SistemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SistemRoutes),
    NgxDatatableModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    ComponentsModule
  ]
})
export class SistemModule {}
