import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from "ngx-bootstrap/modal";
import { TabsModule } from 'ngx-bootstrap/tabs';

import { PengagihanComponent } from "./pengagihan.component";

import { RouterModule } from "@angular/router";
import { PengagihanRoutes } from "./pengagihan.routing";

@NgModule({
  declarations: [PengagihanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PengagihanRoutes),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    TabsModule.forRoot(),
    ReactiveFormsModule
  ]
})
export class PengagihanModule {}


